<script>
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';
	import { additionalNavItems, navItems } from './data';

	import NavButton from './NavButton.svelte';
	import { enhance } from '$app/forms';

	let value = $state();
</script>

<NavButton bind:toggleMenu={value}></NavButton>

{#if value}
	<nav transition:fade={{ duration: 100 }}>
		<div>
			{#each navItems as navItem}
				<a
					onclick={() => {
						value = false;
					}}
					class:active={page.url.pathname == navItem.url}
					href={navItem.url}>{navItem.text}</a
				>
			{/each}
			{#each additionalNavItems as navItem}
				<a
					onclick={() => {
						value = false;
					}}
					class:active={page.url.pathname == navItem.url}
					href={navItem.url}>{navItem.text}</a
				>
			{/each}
		</div>
        <form method="post" action="/dashboard?/logout" use:enhance>
			<button>
                Sign Out
            </button>
		</form>
	</nav>
{/if}

<style>
	nav {
		position: absolute;
		height: calc(100vh - 6em);
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: end;
		background-color: #fcfdff;
		padding: 4em 2em;
        gap: 1em;
		z-index: 1;
	}
    div {
        display: flex;
        flex-direction: column;
		align-items: end;
        gap: 1em;
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
		border: solid 0.16em transparent;
	}
	a:hover,
	.active {
		color: hsl(229, 84%, 5%);
		border: solid 0.16em rgba(200, 210, 219, 0.262);
		transition: all 0.2s;
		translate: -1em 0;
	}
</style>
