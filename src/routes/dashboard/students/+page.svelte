<script lang="ts">
	import { students } from "../students/data";
	import type { ActionData } from "./$types";
	import AddStudentForm from "./AddStudentForm.svelte";
    /**
     * 1. Add student modal.
     * 2. Edit student.
    */
   let { form }: {form: ActionData} = $props()
   let showForm: boolean = $state(false);
</script>


<section>
    {#if showForm}
        <AddStudentForm {form} bind:open={showForm}></AddStudentForm>
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
        {#each students as student}
        <a class="card" href="/dashboard/students/{student.name}">
            <div>
                <h3>
                    {student.name}
                </h3>
                <h4>Points: {student.points}</h4>
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