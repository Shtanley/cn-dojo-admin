<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<section>
	<span>
		<img src="/N.svg" alt="Icon.">
	</span>
	<div>
		<h4>Naosae Admin Login</h4>
		<br />
		<form method="post" action="?/login" use:enhance autocomplete="off">
			<label>
				Email
				<input name="email" type="email" placeholder="m@example.com" autocomplete="off" />
			</label>
			<label>
				Password
				<input type="password" name="password" />
			</label>
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
	span {
		flex: 1;
		height: 100%;
		display: grid;
		place-items: center;
		background: linear-gradient(45deg, #020617, #000000);
		background-size: 300% 300%;

		-webkit-animation: AnimationName 31s ease infinite;
		-moz-animation: AnimationName 31s ease infinite;
		animation: AnimationName 31s ease infinite;
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

	img {
		height: 100%;
		max-width: 50vw;
		height: fit-content;
		width: fit-content;
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

	@media (width < 1200px) {
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
			justify-content: normal;
			padding: 25vw 0;
		}
		img {
			height: 100%;
			max-width: 90vw;
		}
	}
</style>
