
import { students, type Student } from '../../../../lib/server/data.js';

export const load = async ({params}) => {
    let studentId = params.student
    
    // Fetch data using student id.

    let student: Student = students[0]
    return {
        student
    }
};