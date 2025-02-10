<script lang="ts">
	import { scale } from 'svelte/transition';
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	let { open = $bindable(false), form}: {open: boolean, form: ActionData } = $props();
</script>

<section transition:scale>
	<form method="post" action="/dashboard/students?/add" use:enhance>
		<span>
			<h2>Add Student</h2>
			<button
				type="reset"
				class="danger-btn"
				onclick={() => {
					open = false;
				}}>Exit</button
			>
		</span>
		<br />
		<span>
			<input name="firstName" autocomplete="new-password" placeholder="First Name" />
			<input name="lastName" autocomplete="new-password" placeholder="Last Name" />
		</span>
		<input name="parentEmail" autocomplete="new-password" placeholder="Parent Email" />
		<span>
			<input name="username" autocomplete="new-password" placeholder="Username" />
			<input name="password" autocomplete="new-password" placeholder="Password" />
		</span>
		<h4>Date of Birth</h4>
		<span>
			<input name="yearOfBirth" autocomplete="new-password" placeholder="DD" />
			<input name="monthOfBirth" autocomplete="new-password" placeholder="MM" />
			<input name="dayOfBirth" autocomplete="new-password" placeholder="YY" />
		</span>
		<h4>Profile</h4>
		<span>
			<input name="belt" autocomplete="new-password" placeholder="Belt" />
			<input name="level" autocomplete="new-password" placeholder="Level" />
			<input placeholder="Points" />
		</span>
		{#if form?.message}
			<span class="card" transition:scale>
				<p>{form?.message ?? ''}</p>
				<button
					class="danger-btn"
					onclick={() => {
						form.message = "";
					}}>Dismiss</button
				>
			</span>
		{/if}
		<button type="submit">Submit</button>
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

			input {
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
			.card {
				position: absolute;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 2em;
				width: fit-content;
				max-width: 40vw;
				background-color: #fcfdff;
			}
		}
	}
</style>
