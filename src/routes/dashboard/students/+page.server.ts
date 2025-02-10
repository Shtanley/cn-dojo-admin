import { fail, type Actions } from "@sveltejs/kit";
import { students } from "./data";
import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async ({params}) => {
    return {
        students
    }
};

export const actions: Actions = {
    add: async (event) => {
        const formData = await event.request.formData()
        const firstName = formData.get('firstName')
        const lastName = formData.get('lastName');
        const userName = formData.get('userName');
        const password = formData.get('password');
        const parentEmail = formData.get('parentEmail') as string;
        const dayOfBirth = formData.get('dayOfBirth');
        const monthOfBirth = formData.get('monthOfBirth');
        const yearOfBirth = formData.get('yearOfBirth');
        const belt = formData.get('belt');
        const level = formData.get('level');
        const points = formData.get('points');


        if (!validateEmail(parentEmail)) {
            console.log("...")
            return fail(400, { message: 'Invalid email.' });
        }
    },
    update: () => {},
    remove: () => {}
};

function validateEmail(email: string): email is string {
    return (
        typeof email === 'string' &&
        email.length >= 3 &&
        email.length <= 31 //&&
        ///^[a-z0-9_-]+$/.test(email)
    );
}