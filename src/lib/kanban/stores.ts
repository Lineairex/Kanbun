import { writable } from 'svelte/store';

export let todo_count = writable(0);
export let column_count = writable(0);

function todo_id_gen() {
    todo_count.update((n) => n + 1);
    return String(todo_count);
}

function column_id_gen() {
    column_count.update((n) => n + 1);
    return 'c' + String(column_count);
}

