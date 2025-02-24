<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    let { data } = $props();
    let { student } = data;

    let pointButtons = writable<number[]>([1, 2, 3, 4, 5]);
    let customAmount = writable<number>(0);
    let history = writable<{ amount: number, note: string, timestamp: string }[]>([]);
    let note = writable<string>("");

    const modifyPoints = (amount: number, reason: string) => {
        student.points += amount;
        history.update(h => [{ amount, note: reason, timestamp: new Date().toLocaleString() }, ...h]);
    };

    const addCustomButton = () => {
        if ($customAmount > 0 && !$pointButtons.includes($customAmount)) {
            pointButtons.update(buttons => [...buttons, $customAmount]);
        }
    };

    const removeButton = (amount: number) => {
        pointButtons.update(buttons => buttons.filter(button => button !== amount));
    };
</script>

<section>
    <!-- Header section with student name, points, and custom input fields -->
    <div class="header">
        <h1>{student?.name}'s Profile</h1>
        <h2>Points: {student?.points}</h2>
        
        <div class="custom-controls">
            <input type="number" bind:value={customAmount} placeholder="Custom Amount" />
            <button on:click={addCustomButton}>Add Button</button>
            
            <input type="number" bind:value={customAmount} placeholder="Points to Remove" />
            <input type="text" bind:value={$note} placeholder="Note" />
            <button on:click={() => modifyPoints($customAmount, $note)}>Modify Points</button>
        </div>
    </div>

    <!-- Grid for predefined add/remove point buttons -->
    <div class="grid">
        {#each $pointButtons as amount}
            <button on:click={() => modifyPoints(+amount, `Added ${amount} points`)}>+{amount}</button>
            <button on:click={() => modifyPoints(-amount, `Removed ${amount} points`)}>-{amount}</button>
        {/each}
    </div>

    <!-- Scrollable History Section -->
    <div class="history-container">
        <h3>History</h3>
        <ul class="history">
            {#each $history as entry}
                <li>{entry.timestamp} {entry.amount} points ({entry.note})</li>
            {/each}
        </ul>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        max-width: 800px;
        gap: 1rem;
    }

    .custom-controls {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        gap: 1rem;
        width: 100%;
        max-width: 600px;
        justify-content: center;
    }

    button {
        padding: 10px;
        cursor: pointer;
        text-align: center;
        width: 100%;
        min-width: 80px;
    }

    input {
        padding: 5px;
        width: 150px;
    }

    /* Scrollable History Section */
    .history-container {
        width: 100%;
        max-width: 600px;
        text-align: center;
    }

    .history {
        list-style-type: none;
        padding: 0;
        margin-top: 10px;
        max-height: 200px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
    }

    .history li {
        padding: 5px;
        border-bottom: 1px solid #ddd;
    }
</style>
