<title>Główna tablica - Kanbun</title>

<script>
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
        background-color: red;
    }
</style>

<div class="kanban">
    <Task />
    <div class="color-circle"></div>
</div>
