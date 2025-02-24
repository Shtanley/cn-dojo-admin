import { db } from "$lib/server/db/index.js";
import { studentProfile as studentProfileTable } from "$lib/server/db/schema/student.js";
import { fail, type Actions } from "@sveltejs/kit";
import { eq } from "drizzle-orm";

export const load = async ({params}) => {
    let userName = params.student

    return {
        userName
    }
};

export const actions: Actions = {
    addPoints: async (event) => { 
        const formData = await event.request.formData()

        const currentPoints = parseInt(formData.get('points') as string)
        const pointsToAdd = parseInt(formData.get('pointsToAdd') as string)
        const studentId = formData.get('studentId') as string
        if(Number.isNaN(pointsToAdd)) {
            return fail(400,  { error: "Please enter a number."})
        }
        // try {
        //     let pointsAdded = await db.update(studentProfileTable).set({points: currentPoints + pointsToAdd}).where(eq(studentProfileTable.studentId, studentId)).returning({points: studentProfileTable.points})

        //     if(pointsAdded[0].points == pointsToAdd) {
        //         return { success: "Sucessfully added student!" }
        //     }
            
        // } catch (error) {
        //     return fail(400, { error: "Points could not be added."})
        // }

        console.log(formData)
    },
    removePoints: async ({}) => {

    }
};