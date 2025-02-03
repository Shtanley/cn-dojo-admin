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
	import { students } from "./data";
</script>

<section>
    <!-- Search bar container -->
    <div class="search-container">
        <label for="search-input">Search</label>
        <input id="search-input" type="text" placeholder="Search students..." />
        <button>Add New Student</button>
    </div>

    <!-- Student grid container -->
    <div class="student-grid">
        {#each students as student}
            <a href="#" class="student-card">
                <h3>{student.name}</h3>
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

    button {
        padding: 0.8em;
        font-size: 1em;
        cursor: pointer;
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
        border: 2px solid rgb(0, 4, 255);
        padding: 1em;
        text-align: center;
        background-color: #f8f8f8;
        border-radius: 8px;
        text-decoration: none;
        color: black;
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

