import { db } from "$lib/server/db";
import { center as centerTable, type Center} from "$lib/server/db/schema/center.js";
import { student as studentTable, studentProfile as studentProfileTable, type Student, type StudentProfile } from "$lib/server/db/schema/student";
import { eq } from "drizzle-orm";

export const load = async ({ locals }) => {
    let admin = locals.admin

    async function getCenter() {
        let center: Center | null = null
        try {
            if (admin?.center) {
                let data = await db.select().from(centerTable).where(eq(centerTable.location,
                    admin.center
                ))
                if(data) {
                    center = data[0]
                }
            }
        }
        catch (e) {
            return center
        }
        return center
    }

    async function getStudents() {
        let students: { student: Student, student_profile: StudentProfile }[] = [];
        try {
            if (admin?.center) {
                let classList = await db.select().from(studentTable).where(eq(studentTable.center,
                    admin.center
                )).innerJoin(studentProfileTable, eq(studentProfileTable.studentId, studentTable.id)).orderBy(studentTable.firstName, studentTable.lastName)
                students = classList
            }
        }
        catch (e) {
            return students
        }
        return students
    }

    return {
        students: await getStudents(),
        admin,
        center: await getCenter()
    }
};