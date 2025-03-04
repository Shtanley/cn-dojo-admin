<script lang="ts">
    import type { ActionData, PageData } from "./$types";
    import AddProductForm from "./AddProductForm.svelte"

    let { form, data }: { form: ActionData, data: PageData } = $props();
    let { products } = data;
    let showForm: boolean = $state(false);
</script>

<section>
    {#if showForm}
        <AddProductForm {products} {form} bind:open={showForm}></AddProductForm>
    {/if}
    <h2>Shop</h2>
    <br>
    <span>
        <input type="search" placeholder="Search">
        <button onclick={() => {
            showForm = true
        }}>Add Product</button>
    </span>
    <br>
    <span>
        {#each products as product}
        <a class="card" href="#">
            <div>
                <h3>{product.name}</h3>
                <h4>Price: ${product.price}</h4>
                <button class="caution-btn">Remove</button>
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
