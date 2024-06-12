<script lang='ts'>
    import { slide, fade } from 'svelte/transition';

    let num: number = 2; 
    let elements = [ {number: 1, content: "To jest pierwszy element"} ];

    $: num, elements=elements;

    let newContent: string = "";

    function generateElement() {
        if (newContent !== "") {
            elements.push({ number: num, content: newContent });
            num++;
            newContent = ""; 
        }
    }

    function handleClick(number: number) {
        elements = elements.filter(element => element.number !== number);
    }
</script>

<style lang='scss'>
    @import "$styles";

    .content {
        align-items: center;
    }

    .input {
        border: 1px solid $ui-background;
        background-color: $ui-background;
        color: $ui-text;
        

        transition: border-color 0.3s ease;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 20px 0;
    }

    input {
        padding: 10px;
        border-radius: 4px;
        border: 1px solid $ui-background;
        font-size: 16px;
        width: 100%;
        max-width: 300px;
        box-sizing: border-box;
        transition: border-color 0.3s ease, background-color 0.3s ease;
    }

    .input:hover {
        border-color: $ui-accent; 
    }

    .button {
        padding: 10px 20px;
        background-color: $ui-background;
        color: $ui-text;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .button:hover {
        background-color: $ui-accent;
    }

    .element{
        background-color: $ui-background;
        width: fit-content;
        border: 10px solid $ui-background;
        border-radius: 15px;

        transition: 0.3s ease;
        margin: 10px;
    }

    .element:hover {
        background-color: $ui-accent;
        border: 10px solid $ui-accent;
        box-shadow: 0px 0px 5px $ui-accent;
    }

    .elements {
        display: flex;
        flex-direction: column;
    }
</style>

<div class="content">
    <form on:submit|preventDefault={generateElement}>
        <input class="input" bind:value={newContent} placeholder="Napisz coś...">
        <button class="button" type="submit">
            Dodaj nowy element
        </button>
    </form>
    
    <div class="elements">
        {#each elements as element}
        <button class='button element' on:click={() => handleClick(element.number)} transition:fade={{ delay: 0, duration: 300 }}>
            {element.number}. {element.content}
        </button>
        {/each}
    </div>
</div>
