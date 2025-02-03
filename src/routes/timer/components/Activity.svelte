<script lang="ts">
	import Timer from './Timer.svelte';
	let {
		now,
		name,
		start,
		end,
		image,
	}: { now: Date; name: string; start: Date; end: Date; image: string } = $props();

	let completed: boolean = $state(now.getTime() > end.getTime() ? true : false)
	let active: boolean = $state(now.getTime() > start.getTime() && now.getTime() < end.getTime())

	$effect(() => {
		completed = (now.getTime() > end.getTime() ? true : false)
		active = (now.getTime() > start.getTime() && now.getTime() < end.getTime())
	})
</script>

<span class={active ? 'active' : ''}>
		{#if active}
			<img src="/images/active-{image}" alt="Activity." />
		{:else}
			<img src="/images/{image}" alt="Activity." />
		{/if}
	<div>
		<h3>{name}</h3>
		<span>
			<p>
				{start.toLocaleTimeString('en-US', {
				hour12: true,
				hour: 'numeric',
				minute: '2-digit',
			}).split(" ",1)[0]}
			</p>
			<Timer now={now} endTime={end} startTime={start} 					active={active}
			></Timer>
			<p>{end.toLocaleTimeString('en-US', {
				hour12: true,
				hour: 'numeric',
				minute: '2-digit',
			})}</p>
			{#if completed}
				<img src="/svgs/check.svg" alt="Checkmark." />
			{:else if active}
				<img src="/svgs/active-badge.svg" alt="Badge." />
			{:else}
				<img src="/svgs/badge.svg" alt="Badge." />
			{/if}
		</span>
	</div>
</span>

<style>
	* {
		color: #7600ff;
	}
	span {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin: 0.25em;
		padding: 0.25em 2em;
		gap: 1em;

		img {
			height: 4em;
			width: fit-content
		}

		div {
			display: flex;
			flex-direction: column;
			width: 100%;
			min-width: fit-content;

			h3 {
				font-family: 'Azo Sans Bold';
			}

			p {
				width: 3em;
				
			}
			p:last-of-type {
				width: 5em;
				min-width: fit-content;
			}
			span {
				padding: 0;
				img {
					height: 2em;
					width: fit-content;
				}
			}
		}
	}
	.active {
		padding: 1em 2em;
		background-color: #7600ff;
		border-radius: 1em;
		h3,
		p {
			color: #eed1e1;
		}
	}
</style>
