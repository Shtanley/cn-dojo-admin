<script lang="ts">
	import type { Student, StudentProfile } from '$lib/server/db/schema/student';
	import { untrack } from 'svelte';
	import type { ActionData, PageData } from './$types';
	import AddStudentForm from './AddStudentForm.svelte';

	/**
	 * 1. Add student modal.
	 * 2. Edit student.
	 */
	let { form, data }: { form: ActionData; data: PageData } = $props();

	let { students, admin } = data;
	let showForm: boolean = $state(false);

	let searchTerm: string = $state('');
	let filtered: { student: Student; student_profile: StudentProfile }[] = $state([]);

	$effect(() => {
		if (searchTerm.length > 0) {
			for (let i = 0; i < students.length; i++) {
				if (
					students[i].student.firstName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
				) {
					let searched = false;
					for (let j = 0; j < filtered.length; j++) {
						if (
							filtered[j].student.firstName
								.toLocaleLowerCase()
								.includes(searchTerm.toLocaleLowerCase())
						) {
							searched = true;
						}
					}
					if (!searched) {
						filtered.push(students[i]);
					}
				}
			}
		}
        else {
            filtered = []
        }
	});
</script>

<section>
	{#if showForm && admin}
		<AddStudentForm location={admin.center} {students} {form} bind:open={showForm}></AddStudentForm>
	{/if}
	<h2>Students</h2>
	<br />
	<span>
		<input bind:value={searchTerm} type="search" placeholder="Search" />
		<button
			onclick={() => {
				showForm = true;
			}}>Add Student</button
		>
	</span>
	<br />
	<span>
		{#key filtered.length}
			{#if filtered.length >= 1}
				{#each filtered as data}
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
			{:else if filtered.length == 0}
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
			{/if}
		{/key}
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
