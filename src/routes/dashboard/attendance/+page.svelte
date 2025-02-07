<script>
	import { students } from "../students/data";
</script>


<section>
    <h2>Attending Students</h2>
    <br>
    <span>
        <input type="search" placeholder="Search">
        <a><button class="secondary-btn">Open Scanner</button></a>
        <a href="/timer" target="_blank"><button>Open Timer</button></a>
    </span>
    <br>
    <span>
        {#each students as student}
        <a class="card" href="#">
            <div>
                <h3>{student.name}</h3>
                <button class="caution-btn">Remove</button> <!-- Apply caution-btn style -->
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
    }
</style>