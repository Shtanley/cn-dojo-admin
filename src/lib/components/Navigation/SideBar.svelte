<script>
	import { enhance } from '$app/forms';
	import { navItems } from './data';
	import { page } from '$app/state';
</script>

<nav>
	<img src="/logos/normal.svg" alt="Logo." />
	<div>
		{#each navItems as navItem}
			<a class:active={page.url.pathname == navItem.url} href={navItem.url}
				><b>
					{navItem.text}
				</b></a
			>
		{/each}
	</div>
	<form method="post" action="/dashboard?/logout" use:enhance>
		<button class="danger-btn" id="mobileSignOut"> Sign Out </button>
	</form>
</nav>

<style>
	nav {
		border-right: solid 0.16em rgba(200, 210, 219, 0.262);
		padding: 4em 1em 4em;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1em;
		min-height: 100vh;
		height: 100%;
		width: 100%;

		div {
			display: flex;
			justify-content: center;
			flex-direction: column;
            gap: 0.5em;
			a {
				text-decoration: none;
				font-size: 1em;
				transition: all 0.2s;
				width: 100%;
				padding: 0.5em 1em;
                border-radius: 0.4em;
                border: solid 0.16em rgba(255, 255, 255, 0.393);
				b {
					transition: all 0.2s;
				}
			}
			a:hover,
			.active {
				transition: all 0.2s;
				background-color: rgba(0, 123, 227, 1);
				b {
					padding-left: 1em;
					transition: all 0.2s;
					color: white;
				}
			}
		}
		form {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
            position: relative;

			button {
				min-width: 100%;
			}
		}
	}
</style>
