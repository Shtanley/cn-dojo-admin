import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types.js";
import { validateYear, validateEmail, validateName, validatePassword, validateMonth, validateDay, validateDate } from "$lib/server/validation";
import { students } from "$lib/server/data.js";
import { center } from "$lib/server/db/schema/center.js";

export const load = async ({ params, locals }) => {
    let admin = locals.admin
    return { students, admin }
};

export const actions: Actions = {
    add: async (event) => {
        const formData = await event.request.formData()

        let studentData = {
            firstName: formData.get('firstName') as string,
            lastName: formData.get('lastName') as string,
            userName: formData.get('userName') as string,
            password: formData.get('password') as string,
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

        console.log(studentData)

        if (!validateName(studentData.lastName)) {
            return fail(400, { error: "Invalid name." })
        }

        if (!validateEmail(studentData.email)) {
            return fail(400, { error: "Invalid email." })
        }

        if (!validatePassword(studentData.password)) {
            return fail(400, { error: "Use a more secure password." })
        }

        if (!validateYear(studentData.birthYear, 15, 5) || !validateMonth(studentData.birthMonth) ||
            !validateDay(studentData.birthDay)) {
            return fail(400, { error: "Invalid age." })
        }

        if (!validateDate(studentData.birthMonth, studentData.birthDay, studentData.birthYear)) {
            return fail(400, { error: "Invalid date of birth." })
        }

        // Insert.
        console.log(studentData, studentProfileData)
        return { success: "Sucessfully added student!" }
    },
    update: () => { },
    remove: () => { }
};