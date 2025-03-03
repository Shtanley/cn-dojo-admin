<script lang="ts">
	import { invalidate, invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';

    /**
     * Finish students page first.
    */
    let { data } = $props()

    let { students } = data

    async function checkAttendanceLog() {
        let res = await fetch(`/dashboard/attendance/${data.center?.id}`)
        let lastUpdated = new Date(await res.json())
        if((new Date().getTime() - lastUpdated.getTime()) < 3000) {
            invalidateAll()    
        }
        setTimeout(() => {
            checkAttendanceLog()
        }, 1000)
    }

    onMount(async () => {
        await checkAttendanceLog()
    })
</script>


<section>
    <h2>Attendance</h2>
    <br>
    <span>
        <input type="search" placeholder="Search">
        <a><button class="secondary-btn">Open Scanner</button></a>
        <a href="/timer" target="_blank"><button>Open Timer</button></a>
    </span>
    <br>
    <span>
        {#each students as data}
        <a class="card" href="#">
            <div>
                <h3>
                    {data.student.firstName}
                </h3>
                <button class="danger-btn">Remove</button>
            </div>
        </a>
    {/each}
    </span>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        span {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1em;
            flex-wrap: wrap;
        }

        a {
            text-decoration: none;
        }
    }
</style>