<script lang="ts">
    let { data } = $props()

    let { product } = data
</script>

<section>
    <h1>Item: {product?.name}</h1>
</section>


<style>
  
</style>