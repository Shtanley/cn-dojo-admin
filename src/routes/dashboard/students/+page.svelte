<script lang="ts">
    /**
     * Backend:
     *  1. Fetch Students
     *  2. Form Actions for CRUD.
     * 
     * Frontend:
     *  1. Search
     *  2. Add New Student
     *  3. Display Students (Ex)
     *  4. Redirect to Student Profile
    */
   let { data } = $props()

	let { students } = data
</script>

<section>
    Search
    <input>
    <button>Add New Student</button>
    {#each students as student}
        <a href="#">
            <div>
                <h3>
                    {student.name}
                </h3>
            </div>
        </a>
    {/each}
</section>

<style>
    section {
        border: solid 1px red;

        div {
            border: solid 2px black;
        }
    }
</style>