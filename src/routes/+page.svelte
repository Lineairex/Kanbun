<title>Główna tablica - Kanbun</title>

<script>
    import DynamicDiv from '$lib/DynamicDiv.svelte';
    import Task from '../lib/kanban/Task.svelte';
</script>

<style lang="scss">
    @import '$styles';

    .kanban {
        padding: 30px 30px;
        display: flex;
        flex-wrap: wrap;
    }

    .color-circle {
        width: 150px;
        height: 150px;
        border-radius: 75px;
        background-color: white; 
        margin: 20px;
    }

    .content {
        display: flex;
        justify-content: space-evenly;
    }

    .colors {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: $ui-background;
        padding: 100px;
        border-color: $ui-background;
        border-radius: 30px;
    }

    .elementCreator {
        margin-top: 30px;
        background-color: $ui-background;
        padding: 50px;
        border-radius: 30px;
    }
</style>

<div class="content">
    <div class="kanban">
        <div class="colors">
            <h1>Wybieracz kolorów</h1>
            <div class="color-circle"></div>
            <Task />
        </div>
    </div>
    
    <div class="elementCreator">
        <DynamicDiv />  
    </div>
</div>
