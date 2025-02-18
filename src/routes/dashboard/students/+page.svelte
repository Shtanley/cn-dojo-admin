<script lang="ts">
	import type { ActionData, PageData } from "./$types";
	import AddStudentForm from "./AddStudentForm.svelte"
	
    /**
     * 1. Add student modal.
     * 2. Edit student.
    */
   let { form, data }: {form: ActionData, data: PageData} = $props()

   let { students, admin } = data
   let showForm: boolean = $state(false);
</script>


<section>
    {#if showForm && admin}
        <AddStudentForm location={admin.center} {students} {form} bind:open={showForm}></AddStudentForm>
    {/if}
    <h2>Students</h2>
    <br>
    <span>
        <input type="search" placeholder="Search">
        <button onclick={() => {
            showForm = true
        }}>Add Student</button>
    </span>
    <br>
    <span>
        {#each students as data}
        <a class="card" href="/dashboard/students/{data.student.userName}">
            <div>
                <h3>
                    {data.student.firstName}
                    {data.student.lastName}
                </h3>
                <h4>Points: {data.student_profile.points}</h4>
            </div>
        </a>
    {/each}
    </span>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        span {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1em;
            flex-wrap: wrap;
        }

        a {
            text-decoration: none;
        }
    }
</style>