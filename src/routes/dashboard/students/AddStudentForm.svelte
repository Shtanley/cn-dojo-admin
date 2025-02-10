<script lang="ts">
	import { scale } from "svelte/transition";

    let { open = $bindable(false) } = $props()

    let message = $state(true);
</script>

<section transition:scale>
    <form>
        <span>
        <h2>New Student</h2>
            <button class="danger-btn" onclick={() => {open = false}}>Exit</button>
        </span>
        <br>
        <span>
            <input placeholder="First Name">
            <input placeholder="Last Name">
        </span>
        <input placeholder="Parent Email">
        <span>
            <input placeholder="Username">
            <input placeholder="Password">
        </span>
        <h4>Date of Birth</h4>
        <span>
            <input placeholder="DD">
            <input placeholder="MM">
            <input placeholder="YY">
        </span>
        <h4>Profile</h4>
        <span>
            <input placeholder="Belt">
            <input placeholder="Level">
            <input placeholder="Points">
        </span>
        {#if message}
            <span class="card" transition:scale>
                <p>Message</p>
                <button class="danger-btn" onclick={() => {message = false}}>Dismiss</button>
            </span>
        {/if}
        <button>Submit</button>
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

            input {
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
            .card {
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 2em;
                width: fit-content;
                max-width: 40vw;
                background-color: #fcfdff;
            }
        }
    }
</style>