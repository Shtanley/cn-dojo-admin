<script lang="ts">
    let {now, endTime, startTime, active}: {now: Date, endTime: Date, active: boolean, startTime: Date} = $props()
    let width: number = $state(0);
    let status: string = $state("inactive")

    $effect(() => {
        if(active) {
            width = ((now.getTime() - startTime.getTime())/(endTime.getTime() - startTime.getTime()))*100
            status = "active"
        }
    })
</script>

<span>
    <div style="width: {width}%;"></div>
</span>

<style> 
    span {
        width: 100%;
        background-color: #ae67ff;
        height: 0.3em;
        border-radius: 1em;
        display: flex;
        align-items: center;

        div {
            height: 0.3em;
            border-radius: 1em;
            max-width: 100%;
        }
        .inactive {
            background-color: #eed1e1;
            outline: solid 0.2em #7600ff;
        }
        .active {
            background-color: #eed1e1;
            outline: solid 0.2em #7600ff;
        }
    }
</style>