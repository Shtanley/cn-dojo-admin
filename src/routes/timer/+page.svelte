<script lang="ts">
	import { onMount } from 'svelte';
	import Activity from './components/Activity.svelte';
	import Clock from './components/Clock.svelte';
	import {
		activities,
		firstHourTimeBlocks,
		secondHourTimeBlocks,
		thirdHourTimeBlocks,
		lastHourTimeBlocks
	} from './components/data';

	let now: Date = $state(new Date());
	let startTime: Date = firstHourTimeBlocks[0];
	let endTime: Date = lastHourTimeBlocks[lastHourTimeBlocks.length - 1];
	endTime.setHours(lastHourTimeBlocks[0].getHours() + 1, lastHourTimeBlocks[0].getMinutes(), 0, 0);

	let timeBlocks: Date[] = $state(lastHourTimeBlocks);

	function setHour(): Date[] {
		let timeblocks: Date[];

		if (now.getTime() < secondHourTimeBlocks[0].getTime()) {
			timeblocks = firstHourTimeBlocks;
		} else if (now.getTime() < thirdHourTimeBlocks[0].getTime()) {
			timeblocks = secondHourTimeBlocks;
		} else if (now.getTime() < lastHourTimeBlocks[0].getTime()) {
			timeblocks = thirdHourTimeBlocks;
		} else if (now.getTime() < endTime.getTime()) {
			timeblocks = lastHourTimeBlocks;
		}
		else {
			timeblocks = firstHourTimeBlocks;
		}
		return timeblocks;
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
		timeBlocks = setHour();
		setTimeout(updateTime, 1);
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
				start={timeBlocks[i]}
				end={timeBlocks[i + 1]}
				image={activity.image}
			></Activity>
			<span></span>
		{/each}
		<br />
		<Clock
			time={now.toLocaleTimeString('en-US', {
				hour12: true,
				hour: 'numeric',
				minute: '2-digit',
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
