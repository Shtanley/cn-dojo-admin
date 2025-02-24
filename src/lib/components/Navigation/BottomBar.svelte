<script>
	import { enhance } from '$app/forms';
	import { navItems } from './data';
	import { page } from '$app/state';
</script>

<nav>
	<div>
		{#each navItems as navItem}
			<a class:active={page.url.pathname == navItem.url} href={navItem.url}
				><b>
					{navItem.text.charAt(0)}
				</b></a
			>
		{/each}
	</div>
	<form method="post" action="/dashboard?/logout" use:enhance>
		<button class="danger-btn"> L </button>
	</form>
</nav>

<style>
	nav {
		border-top: solid 0.16em rgba(200, 210, 219, 0.262);
		padding: 1em;
		display: flex;
		justify-content: center;
        align-items: center;
		gap: 1em;
		width: 100%;

		div {
			display: flex;
			justify-content: center;
            align-items: center;
            gap: 0.5em;
			a {
				display: flex;
				justify-content: center;
				align-items: center;
				text-decoration: none;
				font-size: 1em;
				transition: all 0.2s;
				width: 100%;
				height: 3em;
				width: 3em;
                border-radius: 0.4em;
                border: solid 0.16em rgba(255, 255, 255, 0.393);
                text-align: center;
				b {
					transition: all 0.2s;
				}
			}
			a:hover,
			.active {
				transition: all 0.2s;
				background-color: rgba(0, 123, 227, 1);
				b {
					transition: all 0.2s;
					color: white;
				}
			}
		}
		form {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 3em;
			width: 3em;
			padding: 0;
			position: relative;

			button {
				padding: 0 1.1em;
				height: 3em;
			}
		}
	}
</style>
