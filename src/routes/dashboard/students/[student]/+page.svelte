<script lang="ts">
	import type { Student, StudentProfile } from '$lib/server/db/schema/student.js';

    let { data } = $props()

    let { userName, students } = data
    let studentData: { student: Student, student_profile: StudentProfile } = students[0];

    for(let i = 0; i < students.length; i++) {
      if(students[i].student.userName == userName) {
        studentData = students[i]
        break
      }
    }

    let { student, student_profile } = studentData
</script>

<section>
    <h1>{student.firstName} {student.lastName}</h1>
    <h3>{student_profile.points} Points</h3>
    <h4>{student_profile.belt} Belt - Level {student_profile.level}</h4>
    <h3>{student.email}</h3>
</section>


<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
</style>