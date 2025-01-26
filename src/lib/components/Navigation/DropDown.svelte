<script>
	import { fade } from 'svelte/transition';
	import NavButton from './NavButton.svelte';
	import { enhance } from '$app/forms';

	let value = $state();
</script>

<div>
	<NavButton bind:toggleMenu={value}></NavButton>

	{#if value}
		<nav class="card" transition:fade={{ duration: 100 }}>
			<form method="post" action="/dashboard?/logout" use:enhance>
				<button id="mobileSignOut"> Sign Out </button>
			</form>
		</nav>
	{/if}
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	nav {
		position: absolute;
		height: 10em;
		width: 4em;
		display: flex;
		flex-direction: column;
		padding: 1em;
		gap: 1em;
		background-color: #fcfdff;;
		border-radius: 1em;
		top: 6em;
		right: 6em;
		min-width: none;
	}
	form {
		width: fit-content;
		min-width: none;
	}
	button {
		text-decoration: none;
		transition: all 0.2s;
		height: 2em;
		padding: 0 1em;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10em;
		font-family: 'Geist Medium';
		width: fit-content;
	}
	button:hover {
		transition: all 0.2s;
	}
</style>
