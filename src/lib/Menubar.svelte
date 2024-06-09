<script>
    import { slide } from 'svelte/transition';
</script>

<style lang="scss">
    @import '$styles';

    @include bar-styles;

    a {
        text-wrap: nowrap;
        text-decoration: none;

        transition: transform 0.3s ease;
    }

    a:hover {
        transform: translateY(-20px);
    }
</style>

<nav>
    <img src="banner-bg.svg" alt="Banner Kanbun" height=100px/>

    <div>
        <a href="/">Tablica Kanban</a>
        <a href="/Informacje">O projekcie</a>
        <a href="/Kontakt">Kontakt</a> 
    </div>
</nav>