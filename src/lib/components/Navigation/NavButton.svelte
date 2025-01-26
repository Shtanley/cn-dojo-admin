<script lang="ts">
    let {toggleMenu = $bindable()} = $props();
</script>

<div>
    <button class:open={toggleMenu} onclick={() => toggleMenu = !toggleMenu} aria-label="Nav button.">
        <span></span>
        <span></span>
    </button>
</div>

<style>
    div {
        display: flex;
        justify-content: end;
        align-items: center;
    }
    button {
        background-color: transparent;
        border: none;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: end;
        flex-direction: column;
        gap: 0.3em;

        span {
            border: solid 0.15em black;
            width: 2em;
            transition: all 0.2s;
        }
    }

    button:hover {
        span:last-of-type {
            width: 1em;
            transition: all 0.2s;
        }
    }

    .open {
        span {
            rotate: -45deg;
        }
    }

    @media (width < 1000px) {
        div {
            padding: 2em;
        }
    }
</style>