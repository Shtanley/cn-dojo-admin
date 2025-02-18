<script lang="ts">
	import Activity from './components/Activity.svelte';
	import Clock from './components/Clock.svelte';
	import { activities, getTimeBlocks } from './components/data';

	let now: Date = $state(new Date());

	let firstHourTimeBlocks: Date[] = $state([]);
	let secondHourTimeBlocks: Date[] = $state([]);
	let thirdHourTimeBlocks: Date[] = $state([]);
	let lastHourTimeBlocks: Date[] = $state([]);
	let endTime: Date = new Date();

	function updateHours() {
		firstHourTimeBlocks = now.getDay() == 6 ? getTimeBlocks(false, 10) : getTimeBlocks(true, 15);
		secondHourTimeBlocks = now.getDay() == 6 ? getTimeBlocks(false, 11) : getTimeBlocks(true, 16);
		thirdHourTimeBlocks = now.getDay() == 6 ? getTimeBlocks(false, 12) : getTimeBlocks(true, 17);
		lastHourTimeBlocks = now.getDay() == 6 ? getTimeBlocks(false, 13) : getTimeBlocks(true, 18);
		endTime.setHours(lastHourTimeBlocks[0].getHours() + 1, lastHourTimeBlocks[0].getMinutes(), 0, 0);
	}

	let startTime: Date = $derived(firstHourTimeBlocks[0]);

	let timeblocks: Date[] = $state([]);

	function updateTimeBlocks() {
		if (now.getTime() < secondHourTimeBlocks[0].getTime()) {
			timeblocks = firstHourTimeBlocks;
		} else if (now.getTime() < thirdHourTimeBlocks[0].getTime()) {
			timeblocks = secondHourTimeBlocks;
		} else if (now.getTime() < lastHourTimeBlocks[0].getTime()) {
			timeblocks = thirdHourTimeBlocks;
		} else if (now.getTime() < endTime.getTime()) {
			timeblocks = lastHourTimeBlocks;
		} else {
			timeblocks = firstHourTimeBlocks;
		}
	}
	function hourStart(now: Date, startTime: Date, endTime: Date): boolean {
		if (now > startTime && now < endTime) {
			return true;
		} else {
			return false;
		}
	}

	function updateTime(): void {
		now = new Date();
		updateHours();
		updateTimeBlocks();
		setTimeout(updateTime, 900);
	}
	updateTime();

</script>

<section>
	<div>
		<h1>Activities</h1>
		<br />
		<span></span>
		{#each activities as activity, i}
			<Activity
				{now}
				name={activity.name}
				start={timeblocks[i]}
				end={timeblocks[i + 1]}
				image={activity.image}
			></Activity>
			<span></span>
		{/each}
		<br />
		<Clock
			time={now.toLocaleTimeString('en-US', {
				hour12: true,
				hour: 'numeric',
				minute: '2-digit'
			})}
		></Clock>
	</div>
</section>

<style>
	* {
		color: #7600ff;
	}

	section {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1em;
		min-width: fit-content;
		flex-direction: column;
		width: 100%;
		background-color: #faa8a8;
	}

	div {
		height: fit-content;
		width: 100%;
		background-color: #eed1e1;
		border-radius: 0.75em;
		border: solid 0.3em#7600ff;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2em 1em;
		flex-direction: column;
		max-width: 40em;
	}

	span {
		width: 95%;
		height: 0.2em;
		background-color: #dfbacf;
		border-radius: 1em;
	}
</style>
