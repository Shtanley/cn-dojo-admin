<script lang="ts">
	import { scale } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import type { Product } from '$lib/server/data';

	let {
		open = $bindable(false),
		form,
		products
	}: { open: boolean; form: ActionData; products: Product[]} = $props();

	let productName: string = $state('');
	let price: number = $state(0);
	let category: string = $state('');

	$effect(() => {
		let attempt = 0;
		for (let i = 0; i < products.length; i++) {
			if (productName === products[i].name) {
				attempt += 1;
				let newProductName = productName;
				if (attempt > 1) {
					newProductName = productName.substring(0, productName.length - 1) + attempt;
				} else {
					newProductName += attempt;
				}
				productName = newProductName;
				i = 0;
			}
		}
	});
</script>

<section transition:scale>
	<form method="post" action="/dashboard/products?/add" use:enhance>
		<span>
			<h2>New Product</h2>
			<button
				type="reset"
				class="danger-btn"
				onclick={() => {
					if (form) {
						form.error = '';
						form.success = '';
					}
					open = false;
				}}>Exit</button
			>
		</span>

		<span>
			<div class="input-container">
				<label for="productName"> Product Name </label>
				<input
					bind:value={productName}
					name="productName"
					placeholder="Example Product"
				/>
			</div>
		</span>

		<span>
			<div class="input-container">
				<label for="price"> Price (pts) </label>
				<input
					type="number"
					bind:value={price}
					name="price"
					placeholder="10"
					min="0"
					step="1"
				/>
			</div>
		</span>

		<div class="input-container">
			<label for="category"> Category </label>
			<input
				bind:value={category}
				name="category"
				placeholder="Fidget, Toy, etc."
			/>
		</div>

		{#if form?.error || form?.success}
			<b class:error={form.error} class:success={form.success}>{form.success}{form.error}</b>
		{/if}

		<button type="submit">Add to Shop</button>
	</form>
</section>

<style>
	section {
		justify-content: center;
		align-items: center;
		position: absolute;
		background-color: #fcfdff;
		margin: 0;
		z-index: 1;
		gap: 1em;
		height: 100%;
		width: 100%;
		padding: 0em;
		top: 0;

		form {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1em;
			max-width: 32em;

			input,
			select {
				width: 100%;
			}
			span {
				display: flex;
				max-width: 100%;
				width: 100%;
				gap: 1em;
				justify-content: space-between;
				align-items: center;
			}
			button {
				min-width: none;
				top: 10%;
				right: 11.25%;
				width: 100%;
			}
		}
	}
</style>
