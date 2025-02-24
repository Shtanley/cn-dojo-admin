<script>
	import BottomBar from "$lib/components/Navigation/BottomBar.svelte";
import SideBar from "$lib/components/Navigation/SideBar.svelte";

	
</script>

<div>
	<span class="side-nav"><SideBar></SideBar></span>
	<div>
		<slot />
	</div>
	<span class="bottom-nav"><BottomBar></BottomBar></span>
</div>

<style>
	div {
		display: flex;
		min-height: 100vh;
		
		div {
			flex-direction: column;
			position: relative;
			margin-left: 14em;
			width: 100%;
		}
	}
	.side-nav {
		display: flex;
		width: 14em;
		position: fixed;
	}
	.bottom-nav {
		display: none;
		position: fixed;
		bottom: 0;
		width: 100vw;
		background-color: #fcfdff;
		z-index: 1;
	}

	@media (width < 1400px) {
		.side-nav {
			display: none;
		}
		.bottom-nav {
			display: flex;
		}
		div {
			div {
				margin-left: 0;
			}
		}
	}
</style>
