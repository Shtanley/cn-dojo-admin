<script lang="ts">
	import { type Student, type StudentProfile } from '$lib/server/db/schema/student';
	import type { ActionData, PageData } from './$types';
	import AddStudentForm from './AddStudentForm.svelte';

	/**
	 * 1. Add student modal.
	 * 2. Edit student.
	 */
	let { form, data }: { form: ActionData; data: PageData } = $props();

	let { students, admin } = $state(data);
	let showForm: boolean = $state(false);

	let searchTerm: string = $state(''.toLocaleLowerCase().replace(/\s/g, ''));
	let filtered: { student: Student; student_profile: StudentProfile }[] = $state([]);

	$effect(() => {
		students = data.students;
	});

	$effect(() => {
		if (searchTerm.length > 0) {
			for (let i = 0; i < students.length; i++) {
				let { student } = students[i];
				let { student_profile } = students[i];
				let studentKeys = (student.firstName + student.lastName).toLocaleLowerCase();

				if (studentKeys.includes(searchTerm)) {
					// 1. Check if already searched.
					let searched = false;
					for (let j = 0; j < filtered.length; j++) {
						let filteredStudentKeys = (
							filtered[j].student.firstName + filtered[j].student.lastName
						).toLocaleLowerCase();

						if (filteredStudentKeys == studentKeys) {
							searched = true;
							break;
						}
					}
					if (!searched) {
						filtered.push({ student, student_profile });
					}
				}
				filtered.sort((x, y) => {
					let xKeys = (x.student.firstName + x.student.lastName).toLocaleLowerCase();
					let yKeys = (y.student.firstName + y.student.lastName).toLocaleLowerCase();

					let xKeyChars = 0;
					let yKeyChars = 0;

					for (let k = 0; k < searchTerm.length; k++) {
						if (xKeys.includes(searchTerm.charAt(k))) {
							xKeyChars++;
						}
						if (yKeys.includes(searchTerm.charAt(k))) {
							yKeyChars++;
						}
					}
					return xKeyChars == yKeyChars ? 0 : xKeyChars < yKeyChars ? 1 : -1;
				});
			}
		} else {
			filtered = [];
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
