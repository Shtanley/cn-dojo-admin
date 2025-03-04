import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types.js";
import { validateYear, validateEmail, validateName, validatePassword, validateMonth, validateDay, validateDate } from "$lib/server/validation";
import { student as studentTable, studentProfile as studentProfileTable, type Student, type StudentProfile } from "$lib/server/db/schema/student.js";
import { db } from "$lib/server/db/index.js";
import { hash } from "@node-rs/argon2";

export const actions: Actions = {
    add: async (event) => {
        const formData = await event.request.formData()

        let studentData = {
            firstName: formData.get('firstName') as string,
            lastName: formData.get('lastName') as string,
            userName: formData.get('userName') as string,
            passwordHash: formData.get('password') as string,
            email: formData.get('parentEmail') as string,
            birthDay: parseInt(formData.get('dayOfBirth') as string),
            birthMonth: parseInt(formData.get('monthOfBirth') as string),
            birthYear: parseInt(formData.get('yearOfBirth') as string),
            center: formData.get('center') as string,
            wristbandId: formData.get('wristbandId') as string,
        }

        let studentProfileData = {
            belt: formData.get('belt') as string || "",
            level: parseInt(formData.get('level') as string) || 1,
            points: parseInt(formData.get('points') as string) || 10,
        }


        if (!validateName(studentData.lastName)) {
            return fail(400, { error: "Invalid name." })
        }

        if (!validateEmail(studentData.email)) {
            return fail(400, { error: "Invalid email." })
        }

        if (!validatePassword(studentData.passwordHash)) {
            return fail(400, { error: "Use a more secure password." })
        }

        if (!validateYear(studentData.birthYear, 15, 5) || !validateMonth(studentData.birthMonth) ||
            !validateDay(studentData.birthDay)) {
            return fail(400, { error: "Invalid age." })
        }

        if (!validateDate(studentData.birthMonth, studentData.birthDay, studentData.birthYear)) {
            return fail(400, { error: "Invalid date of birth." })
        }

        /**
         * 1. Unique email.
         */

        const passwordHash = await hash(studentData.passwordHash, {
            // recommended minimum parameters
            memoryCost: 19456,
            timeCost: 2,
            outputLen: 32,
            parallelism: 1
        });
        studentData.passwordHash = passwordHash

        try {

            const newStudent: Student[] = await db.insert(studentTable).values({ ...studentData } as Student).returning();

            if (newStudent) {

                const newStudentProfile: StudentProfile[] = await db.insert(studentProfileTable).values({ ...studentProfileData, studentId: newStudent.at(0)?.id } as StudentProfile).returning()

                if(newStudentProfile) {
                    return { success: "Sucessfully added student!" }
                }
            }

        } catch (e) {
            return fail(500, { message: 'An error has occurred. ' + e });
        }

    },
    update: () => { },
    remove: () => { }
};