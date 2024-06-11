<script lang='ts'>
    let num: number = 2; 
    let elements = [
        { number: 1, content: "kontent"}
    ];

    $: num, elements=elements;

    let newContent: string = "";

    function generateElement() {
        elements.push({ number: num, content: newContent });
        num++;
        newContent = ""; 
    }
</script>

<style>
    .content {
        align-items: center;
    }
</style>

<div class="content">
    <form on:submit|preventDefault={generateElement}>
        <input bind:value={newContent} placeholder="Napisz coś...">
        <button class="button" type="submit">
            Naciśnij by wygenerować nowy element
        </button>
    </form>
    
    
    {#each elements as element}
    <div class='elements'>
        {element.number}. {element.content}
    </div>
    {/each}
</div>
