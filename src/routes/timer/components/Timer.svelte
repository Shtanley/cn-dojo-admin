<script lang="ts">
	let {
		now,
		endTime,
		startTime,
		active,
		completed
	}: { now: Date; endTime: Date; active: boolean; startTime: Date; completed: Boolean } = $props();
	let width: number = $state(0);
	let status: string = $state('inactive');

	$effect(() => {
		if (active) {
			width =
				((now.getTime() - startTime.getTime()) / (endTime.getTime() - startTime.getTime())) * 100;
		} else if (completed) {
			width = 100;
		} else {
			width = 0;
		}
	});
</script>

<span>
	{#if completed}
		<div class="completed"></div>
	{:else if active}
		<div class="active"  style="width: {width}%;"></div>
	{:else}
		<div class="inactive"></div>
	{/if}
</span>

<style>
	span {
		width: 100%;
		background-color: #ae67ff;
		height: 0.3em;
		border-radius: 1em;
		display: flex;
		align-items: center;

		div {
			height: 0.3em;
			border-radius: 1em;
			width: 100%;
		}
		.inactive {
			width: 0%;
			background-color: #eed1e1;
			outline: none;
		}
		.active {
			background-color: #eed1e1;
			outline: solid 0.2em #7600ff;
		}
		.completed {
			background-color: #7600ff;
			outline: none;
		}
	}
</style>
