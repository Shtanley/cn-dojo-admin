<script lang="ts">
	import { page } from '$app/state';
	import { navItems } from './data';
	import DropDown from '$lib/components/Navigation/DropDown.svelte';
	import MobileNavigation from './MobileNavigation.svelte';
</script>

<nav>
	<img src="/logos/normal.svg" alt="Logo." />
	<div>
		{#each navItems as navItem}
			<a 
			class:active={page.url.pathname == navItem.url} href={navItem.url}>{navItem.text}</a>
		{/each}
	</div>
	<DropDown></DropDown>
</nav>

<div id="mobileNav">
    <MobileNavigation></MobileNavigation>
</div>
<style>
	div {
		width: 100%;
		align-items: center;
		display: none;
	}

	nav {
		width: 100%;
		height: 4em;
		display: flex;
		align-items: center;
		padding: 3em 4em;
		justify-content: space-between;

		img {
			height: 3em;
		}

		div {
			display: flex;
            justify-content: center;
            align-items: center;
            width: fit-content;
		    gap: 2em;
		}
	}

	a {
		text-decoration: none;
		transition: all 0.2s;
		height: 2em;
		padding: 0em 1em;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10em;
        width: fit-content;		
		border: solid 0.16em transparent;
	}

	a:hover,
	.active {
		transition: all 0.2s;
		scale: 1.05;
		border: solid 0.16em rgba(200, 210, 219, 0.262);
	}
	.active {
		translate: 0 1em;
	}

    #mobileNav {
        display: none;
    }

	@media (width < 1400px) {
        nav {
            display: none;
        }
		#mobileNav {
			display: block;
		}
	}
	@media (width > 1600px) {
        nav {
            justify-content: space-evenly;
        }
	}
</style>
