import { db } from "$lib/server/db";
import { student as studentTable, studentProfile as studentProfileTable, type Student, type StudentProfile } from "$lib/server/db/schema/student";
import { eq } from "drizzle-orm";

export const load = async ({ locals }) => {
    let admin = locals.admin

    async function getStudents() {
        let students: { student: Student, student_profile: StudentProfile }[] = [];
        try {
            if (admin?.center) {
                let classList = await db.select().from(studentTable).where(eq(studentTable.center,
                    admin.center
                )).innerJoin(studentProfileTable, eq(studentProfileTable.studentId, studentTable.id))
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
        admin
    }
};