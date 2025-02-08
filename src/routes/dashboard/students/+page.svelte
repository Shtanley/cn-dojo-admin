<script>
	import { students } from "../students/data";

</script>


<section>
    <h2>Students</h2>
    <br>
    <span>
        <input type="search" placeholder="Search">
        <a><button>Add Student</button></a>
    </span>
    <br>
    <span>
        {#each students as student}
        <a class="card" href="#">
            <div>
                <h3>
                    {student.name}
                </h3>
                <h4>Points: {student.points}</h4>
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