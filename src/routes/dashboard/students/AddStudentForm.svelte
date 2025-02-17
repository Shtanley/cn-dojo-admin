<script lang="ts">
	import { scale } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import { belts } from '$lib/data';
	import type { Student } from '$lib/server/data';

	let {
		open = $bindable(false),
		form,
		students
	}: { open: boolean; form: ActionData; students: Student[] } = $props();

	let firstName: string = $state('');
	let lastName: string = $state('');
	let belt: string = $state('White');
	let userName: string = $state('');

	$effect(() => {
		userName = (firstName + '.' + lastName).toLocaleLowerCase();
	});

	$effect(() => {
		let attempt = 0;

		for (let i = 0; i < students.length; i++) {
			if (userName === students[i].username) {
				attempt += 1;
				let newUserName = userName;
				if (attempt > 1) {
					newUserName = userName.substring(0, userName.length - 1) + attempt;
				} else {
					newUserName += attempt;
				}
				userName = newUserName;
				i = 0;
			}
		}
	});
</script>

<section transition:scale>
	<form method="post" action="/dashboard/students?/add" use:enhance>
		<span>
			<h2>New Student</h2>
			<button
				type="reset"
				class="danger-btn"
				onclick={() => {
					if (form) {
						form.error = '';
						form.success = '';
					}
					open = false;
				}}>Exit</button
			>
		</span>
		<br />
		<span>
			<div class="input-container">
				<label for="firstName"> First Name </label>
				<input
					bind:value={firstName}
					name="firstName"
					autocomplete="new-password"
					placeholder="Jelly"
				/>
			</div>
			<div class="input-container">
				<label for="lastName"> Last Name </label>
				<input
					bind:value={lastName}
					name="lastName"
					autocomplete="new-password"
					placeholder="Donut"
				/>
			</div>
		</span>
		<div class="input-container">
			<label for="parentEmail"> Parent Email </label>
			<input name="parentEmail" autocomplete="new-password" placeholder="jelly.donut@email.com" />
		</div>
		<h4>Date of Birth</h4>
		<span>
			<div class="input-container">
				<label for="dayOfBirth"> Day </label>
				<input name="dayOfBirth" autocomplete="new-password" placeholder="1" />
			</div>
			<div class="input-container">
				<label for="monthOfBirth"> Month </label>
				<input name="monthOfBirth" autocomplete="new-password" placeholder="1" />
			</div>
			<div class="input-container">
				<label for="yearOfBirth">Year</label>
				<input name="yearOfBirth" autocomplete="new-password" placeholder="2010" />
			</div>
		</span>
		<h4>Profile</h4>
		<span>
			<div class="input-container">
				<label for="userName"> Generated Username </label>
				<input
					type="hidden"
					style="display: none;"
					bind:value={userName}
					name="userName"
					autocomplete="new-password"
				/>
				<input
					disabled
					bind:value={userName}
					name="userName"
					autocomplete="new-password"
				/>
			</div>
			<div class="input-container">
				<label for="password"> Password </label>
				<input type="password" name="password" autocomplete="new-password" placeholder="......." />
			</div>
		</span>
		<span>
			<div class="input-container">
				<label for="belt">Belt</label>
				<select bind:value={belt} name="belt">
					{#each belts as belt}
						<option value={belt}>{belt}</option>
					{/each}
				</select>
			</div>

			<div class="input-container">
				<label for="level">Level</label>
				<input name="level" autocomplete="new-password" placeholder="1" />
			</div>
			<div class="input-container">
				<label for="points"> Starting Points</label>
				<input name="points" placeholder="10" />
			</div>
		</span>
		{#if form?.error || form?.success}
			<b class:error={form.error} class:success={form.success}>{form.success}{form.error}</b>
		{/if}
		<button type="submit">Add to Classlist</button>
	</form>
</section>

<style>
	section {
		justify-content: center;
		align-items: center;
		position: absolute;
		background-color: #fcfdff;
		margin: 0;
		z-index: 1;
		gap: 1em;
		height: 100%;
		width: 100%;
		padding: 0em;
		top: 0;

		form {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1em;
			max-width: 32em;

			input,
			select {
				width: 100%;
			}
			span {
				display: flex;
				max-width: 100%;
				width: 100%;
				gap: 1em;
				justify-content: space-between;
				align-items: center;
			}
			button {
				min-width: none;
				top: 10%;
				right: 11.25%;
				width: 100%;
			}
		}
	}
</style>
