<script lang="ts">
	import { enhance } from '$app/forms';
	import { centers } from '$lib/data';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();

	let center: string = $state("")
</script>

<section>
	<span class="left-section">	<!-- Left Section -->
		<h4 style="color: white; font-size: 2em;">Welcome to the Dojo</h4>

		<!-- Background Image -->
		<img class="background-img" src="/homepage-Front Page Background 3.png" alt="" />

		<!-- Hidden List that appears on hover -->
		<ul class="hidden-list">
			<li>1. Here you can keep track of the ninjas progress</li>
			<li>2. Earn points as you complete games and level up</li>
			<li>3. Spend points in the shop for accesories and goodies</li>
			<li>4. Check the typing leaderboard</li>
			<li>5. Customize your ninja avatar</li>
		</ul>
	</span>

	<div class="login-section">	<!-- Login Form -->
		<h4>Code Ninjas Dojo Admin</h4>
		<br />
		<form method="post" action="?/login" use:enhance autocomplete="off">
			<label>
				Email
				<input name="email" type="email" placeholder="m@example.com" autocomplete="new-password" />
			</label>
			<label>
				Password
				<input type="password" name="password" autocomplete="new-password"/>
			</label>
			<!--
			<label>
				Firstname
				<input name="firstName" type="name" placeholder="Naous" autocomplete="new-password" />
			</label>
			<label>
				Lastname
				<input name="lastName" type="name" placeholder="Islam" autocomplete="new-password" />
			</label>
			
			<label for="center">Center</label>
				<select bind:value={center} name="center">
					{#each centers as center}
						<option value={center}>{center}</option>
					{/each}
				</select>
				-->
			<button class="primary">Login</button>
		</form>
		<br />
		<p style="color: red">{form?.message ?? ''}</p>
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		padding: 0;
	}
	
	div {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.left-section {	/* Orignally span, Left Section Styling */
		flex: 1;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: linear-gradient(180deg, rgba(0,63,117,1) 0%, rgba(0,123,227,1) 100%);
		background-size: 300% 300%;

		-webkit-animation: AnimationName 31s ease infinite;
		-moz-animation: AnimationName 31s ease infinite;
		animation: AnimationName 31s ease infinite;
		position: relative;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1em;
		width: 25em;
		max-width: 85vw;
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}

	button {
		margin-top: 0.5em;
	}

	/* Background Image */
	.background-img {
		opacity: 0.5;
		transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
		height: auto;
		max-width: 100%;
		object-fit: contain;
		margin-top: 1em; /* Keeps original position */
	}

	/* Move the image upwards when hovering */
	.left-section:hover .background-img {
		opacity: 1;
		/* Pushes the image up smoothly */
		transform: translateY(-50px);
	}

	/* Hidden List Styling */
	.hidden-list {
		opacity: 0;
		visibility: hidden;
		margin-top: 0;
		padding: 1em;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 10px;
		list-style: none;
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
		text-align: left;
		width: 100%;
		max-width: fit-content;
		transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, margin-top 0.3s ease-in-out;
	}

	/* Smoothly show the list below the image */
	.left-section:hover .hidden-list {
		opacity: 1;
		visibility: visible;
		 /* Moves the list down smoothly */
		margin-top: 1em;
	}

	
	@-webkit-keyframes AnimationName {
		0% {
			background-position: 17% 0%;
		}
		50% {
			background-position: 84% 100%;
		}
		100% {
			background-position: 17% 0%;
		}
	}
	@-moz-keyframes AnimationName {
		0% {
			background-position: 17% 0%;
		}
		50% {
			background-position: 84% 100%;
		}
		100% {
			background-position: 17% 0%;
		}
	}
	@keyframes AnimationName {
		0% {
			background-position: 17% 0%;
		}
		50% {
			background-position: 84% 100%;
		}
		100% {
			background-position: 17% 0%;
		}
	}

	@media (width < 1400px) {
		section {
			display: flex;
			flex-direction: column;
			height: 100%;
			width: 100%;
		}
		span {
			flex: auto;
			order: 1;
			width: 100%;
			height: 100vh;
		}
		div {
			flex: auto;
			height: 100vh;
			padding: 25vw 0;
		}
		img {
			height: 100%;
			max-width: 90vw;
		}
	}
</style>
