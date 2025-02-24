<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();

	/**
	 * Overview
	 * 1.
	 */
</script>

<section>
	<h1>Overview</h1>	
	<div class="card">
		<h2>Hi, {data.admin.firstName}!</h2>
		<p>
			Welcome to your dashboard, on this overview page you'll get a summary of your students, attendance, shop and more! Use the links in the navigation to access the other pages.
		</p>
		<br>
		<a href="/"><button class="primary">Visit Store</button></a>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		width: 100%;
		position: relative;

		div, .card {
			min-height: fit-content;
			height: fit-content;
			flex: 0;
		}

	}
</style>
