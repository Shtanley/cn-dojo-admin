<script lang="ts">
	import { scale } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import { belts } from '$lib/data';

	let { open = $bindable(false), form }: { open: boolean; form: ActionData } = $props();

	let belt: string = $state('White');
</script>

<section transition:scale>
	<form method="post" action="/dashboard/students?/add" use:enhance>
		<span>
			<h2>Add Student</h2>
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
			<input name="firstName" autocomplete="new-password" placeholder="John"/>
			</div>
			<div class="input-container">
				<label for="lastName"> Last Name </label>
				<input name="lastName" autocomplete="new-password" placeholder="David" />
			</div>
		</span>
		<div class="input-container">
			<label for="parentEmail"> Parent Email </label>
			<input name="parentEmail" autocomplete="new-password" placeholder="john.david@email.com" />
		</div>
		<span>
			<div class="input-container">
				<label for="username"> Username </label>
				<input name="username" autocomplete="new-password" placeholder="john.david" />
			</div>
			<div class="input-container">
				<label for="password"> Password </label>
				<input type="password" name="password" autocomplete="new-password" placeholder="......." />
			</div>
		</span>
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

				<label for="belt">Belt</label>
				<select name="belt">
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
				<label for="points">Points</label>
				<input name="points" placeholder="100" />
			</div>
		</span>
		{#if form?.error || form?.success}
			<b class:error={form.error} class:success={form.success}>{form.success}{form.error}</b>
		{/if}
		<button type="submit">Submit </button>
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

			input, select {
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
