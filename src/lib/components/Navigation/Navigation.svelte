<script lang="ts">
	import { page } from '$app/state';
	import { navItems } from './data';
	import DropDown from '$lib/components/Navigation/DropDown.svelte';
	import MobileNavigation from './MobileNavigation.svelte';
</script>

<nav>
	<img src="/N.svg" alt="Icon." />
	<div>
		{#each navItems as navItem}
			<a class:active={page.url.pathname == navItem.url} href={navItem.url}>{navItem.text}</a>
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
			border: solid 0.2em rgb(255, 255, 255);
            background-color: hsl(229, 84%, 5%);
			height: 3em;
            width: 3em;
			border-radius: 100%;
			box-shadow: 0.2em 0.2em 1em rgba(70, 81, 94, 0.725), -0.2em -0.2em 1em rgb(255, 255, 255);
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
        font-family: 'Geist Medium';
        width: fit-content;		
		border: solid 0.16em transparent;
	}

	a:hover,
	.active {
		box-shadow: 0.3em 0.3em 1em #d3dae251, -0.3em -0.3em 1em #d3dae251;
		transition: all 0.2s;
		border: solid 0.16em rgba(231, 237, 244, 0.24);
	}
	.active {
		translate: 0 1em;
	}

    #mobileNav {
        display: none;
    }

	@media (width < 1000px) {
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
