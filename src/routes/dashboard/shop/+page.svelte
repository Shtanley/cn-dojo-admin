<script>

    /**
     * Finish student and attendance page first.
    */
   let {data} = $props()

   let { products } = data;

</script>


<section>
    <h2>Shop</h2>

    <span>
        <input type="search" placeholder="Search">
        <a><button>Add Product</button></a>
    </span>
    <span>
        {#each products as product}
        <a class="card" href="#">
            <div>
                <h3>
                    {product.name}
                </h3>
                <button>Remove</button>
            </div>
        </a>
    {/each}
    </span>
</section>

<style>
    section {
        display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		width: 100%;
		position: relative;

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