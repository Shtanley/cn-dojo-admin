<script>
	import { fade } from 'svelte/transition';
	import NavButton from './NavButton.svelte';
	import { enhance } from '$app/forms';
	import { additionalNavItems } from './data';
	import { page } from '$app/state';

	let value = $state();
</script>

<div>
	<NavButton bind:toggleMenu={value}></NavButton>

	{#if value}
		<nav class="card" transition:fade={{ duration: 100 }}>
			{#each additionalNavItems as navItem}
				<a
					onclick={() => {
						value = false;
					}}
					class:active={page.url.pathname == navItem.url}
					href={navItem.url}>{navItem.text}
					</a
				>
			{/each}
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
		z-index: 1;
	}
	nav {
		position: absolute;
		height: 10em;
		width: 4em;
		display: flex;
		flex-direction: column;
		padding: 1em;
		gap: 1em;
		background-color: #fcfdff;
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
		width: fit-content;
	}
	button:hover {
		transition: all 0.2s;
	}

	a {
		text-decoration: none;
		color: hsl(229, 5%, 50%);
		transition: all 0.2s;
		height: 2em;
		padding: 0 1em;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10em;
		font-family: 'Azo Sans Bold';
		width: fit-content;
        font-size: 1.2em;
		text-align: end;
		box-shadow: none;
		border: solid 0.16em rgba(200, 210, 219, 0.262);

	}
	a:hover,
	.active {
		color: hsl(229, 84%, 5%);
		scale: 1.05;
	}
</style>
