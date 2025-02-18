<script lang="ts">
    let { data } = $props()

    let { userName, students } = data
    let { student, student_profile } = students.filter((data) => data.student.userName = userName)[0]
</script>

<section>
    <h1>{student.firstName} {student.lastName}</h1>
    <h3>{student_profile.points} Points</h3>
    <h4>{student_profile.belt} Belt - Level {student_profile.level}</h4>
</section>


<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
</style>