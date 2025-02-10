
import { students, type Student } from '../data.js';

export const load = async ({params}) => {
    let studentId = params.student
    
    // Fetch data using student id.

    let student: Student = students[0]
    return {
        student
    }
};