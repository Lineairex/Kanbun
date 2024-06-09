<script>
    import { slide } from 'svelte/transition';
</script>

<style lang="scss">
    @import '$styles';

    @include bar-styles;

    nav {
        box-shadow: 0px 5px 5px rgb(41, 32, 33);
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