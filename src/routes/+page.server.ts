import { hash, verify } from '@node-rs/argon2';
import { encodeBase32LowerCase } from '@oslojs/encoding';
import { fail, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import * as auth from '$lib/server/auth';
import { db } from '$lib/server/db';
import { admin as adminTable, type Admin } from '$lib/server/db/schema/admin';
import type { Actions, PageServerLoad } from './$types';
import { validateEmail, validatePassword } from '$lib/server/validation';
import { center as centerTable, type Center } from '$lib/server/db/schema/center';

export const load: PageServerLoad = async (event) => {
    if (event.locals.admin) {
        return redirect(302, '/dashboard');
    }
    return {};
};

export const actions: Actions = {
    login: async (event) => {
        const formData = await event.request.formData();
        const email = formData.get('email');
        const password = formData.get('password');

        if (!validateEmail(email)) {
            return fail(400, { message: 'Invalid email.' });
        }
        if (!validatePassword(password)) {
            return fail(400, { message: 'Invalid password.' });
        }

        const results = await db.select().from(adminTable).where(eq(adminTable.email, email));

        const existingAdmin = results.at(0);
        if (!existingAdmin) {
            return fail(400, { message: 'Incorrect email or password.' });
        }

        const validPassword = await verify(existingAdmin.passwordHash, password, {
            memoryCost: 19456,
            timeCost: 2,
            outputLen: 32,
            parallelism: 1
        });
        if (!validPassword) {
            return fail(400, { message: 'Incorrect email or password.'});
        }

        const sessionToken = auth.generateSessionToken();
        const session = await auth.createSession(sessionToken, existingAdmin.id);
        auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);

        return redirect(302, '/dashboard');
    },
    /**
    register: async (event) => {
        const formData = await event.request.formData();

        const email = formData.get('email');
        const password = formData.get('password');
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const centerLocation = formData.get('center');

        if (!validateEmail(email)) {
            return fail(400, { message: 'Invalid email' });
        }
        if (!validatePassword(password)) {
            return fail(400, { message: 'Invalid password' });
        }

        //const userId = generateUserId();
        const passwordHash = await hash(password, {
            // recommended minimum parameters
            memoryCost: 19456,
            timeCost: 2,
            outputLen: 32,
            parallelism: 1
        });

        try {

            const newCenter: Center[] = await db.insert(centerTable).values({
                location: centerLocation
            } as Center).returning()

            const newAdmin: Admin[] = await db.insert(adminTable).values({ email, firstName, lastName, passwordHash, center: centerLocation } as Admin).returning();

            const sessionToken = auth.generateSessionToken();
            const session = await auth.createSession(sessionToken, newAdmin[0].id);
            auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);
        } catch (e) {
            return fail(500, { message: 'An error has occurred. ' + e });
        }
        return redirect(302, '/dashboard');
    }
    **/
};