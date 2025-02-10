<!-- /**
* Backend:
*  1. Fetch Students
*  2. Form Actions for CRUD.
* 
* Frontend:
*  1. Search
*  2. Add New Student
*  3. Display Students (Ex)
*  4. Redirect to Student Profile
*/ -->
<script lang="ts">
    let { data } = $props()

    import { students } from "./data"
</script>

<section>
    <!-- Search bar container -->
    <div class="search-container">
        <label for="search-input">Search</label>
        <input id="search-input" type="text" placeholder="Search students..." />
        <a><button class="secondary-btn">Add Student</button></a>
    </div>

    <!-- Student grid container -->
    <div class="student-grid">
        {#each students as student}
            <a href="#" class="student-card">
                <h3>{student.name}</h3>
                <small>Points: {student.points}</small>
            </a>
        {/each}
    </div>
</section>

<style>
    section {
        border: solid 1px black;
        padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
        width: 100%;
    }

    /* Search bar container */
    .search-container {
        width: 100%;
        max-width: 1270px; /* max width */
        display: flex;
        align-items: center;  /* centers items vertically */
        gap: 0.8em;  /* space between label and input */
    }

    .search-container label {
        font-size: 1em;
        font-weight: bold;
        white-space: nowrap;
    }

    .search-container input {
        flex: 1; /* takes up remaining space */
        padding: 0.8em;
        font-size: 1em;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .secondary-btn {
        padding: 1em 2em;
        background-color: rgba(0,123,227,1);
        transition: all 0.2s;
        border: none;
        outline: none;
        max-width: fit-content;
        border: 2px solid rgba(0,123,227,1);
        color: white;
    }
    .secondary-btn:hover {
        color: rgba(0,63,117,1);
        background-color: rgb(255, 255, 255);
        border: 2px solid rgba(0,63,117,1);
        max-width: fit-content;
    }


    /* Student grid layout */
    .student-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Responsive grid */
        gap: 1em;
        width: 100%;
        max-width: 1115px;  /* adjusts items per row */
    }

    /* Individual student cards */
    .student-card {
        /* border: 2px solid black; */
        padding: 1em;
        text-align: center;
        background-color: #ffffff;
        border-radius: 8px;
        text-decoration: none;
        color: black;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.158);
        transition: transform 0.2s ease-in-out;
    }

    .student-card:hover {
        transform: scale(1.05);
    }

    @media (max-width: 600px) {
        .search-container {
            flex-direction: row;
            width: 100%;
        }

        .search-container input {
            font-size: 0.9em;
            padding: 0.6em;
        }
    }
</style>

