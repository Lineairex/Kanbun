<title>Główna tablica - Kanbun</title>

<script>
    import DynamicDiv from '$lib/DynamicDiv.svelte';
    import Task from '../lib/kanban/Task.svelte';
</script>

<style>
    .kanban {
        padding: 30px 30px;
    }

    .color-circle {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background-color: white; 
        margin: 10px;
    }

    .content {
        display: flex;
        justify-content: center;
    }
</style>

<div class="content">
    <div class="kanban">
        <div class="color-circle"></div>
        <div class="colors">
            <Task />
        </div>
        Jakiś tekst, nie przesuwa się
    </div>
    
    <DynamicDiv />
</div>
