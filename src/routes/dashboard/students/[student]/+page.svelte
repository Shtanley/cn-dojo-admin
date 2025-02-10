<script lang="ts">
    let { data } = $props()

    let { student } = data
</script>

<section>
    <h1>Hello {student?.name}</h1>
</section>


<style>
  
</style>