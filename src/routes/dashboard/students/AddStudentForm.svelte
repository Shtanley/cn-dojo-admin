<script lang="ts">
	import { scale } from "svelte/transition";

    let { open = $bindable(false) } = $props()
</script>

<section transition:scale>
    <form>
        <button class="danger-btn" onclick={() => {open = false}}>X</button>
        <h3>New Student</h3>
        <span>
            <input placeholder="First Name">
            <input placeholder="Last Name">
        </span>
        <input >
        <input>
        <input>
        <h4>Date of Birth</h4>
        <span>
            <input placeholder="DD">
            <input placeholder="MM">
            <input placeholder="YY">
        </span>
        <p>Message</p>
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
                gap: 1em;
            }
            button {
                position: absolute;
                top: 10%;
                right: 11.25%;
            }
        }

    }
</style>