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
	<div class="card">
		<h1>Hi, {data.admin.firstName}!</h1>
		<p>
			Welcome to your dashboard, on this overview page you'll get a summary of your students, attendance, shop and more! Use the links in the navigation to access the other pages.
		</p>
		<br>
		<a href="/"><button class="primary">Visit Store</button></a>
	</div>
</section>

<style>
	@media (width < 1000px) {
		section {
			justify-content: center;
			align-items: center;
			padding: 2em;
		}
	}
</style>
