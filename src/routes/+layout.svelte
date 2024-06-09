<script>
    import Menubar from "../lib/Menubar.svelte";
    import Footer from "../lib/Footer.svelte";
</script>

<style lang="scss">
    @import '$styles';
    
    :global(body) {
        @include default-font;
        
        margin: 0;
        padding: 0;
        background-color: $background;
        color: $bar-font-light;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .slot {
        margin: 15px;
        padding: 15px;
    }
</style>

<Menubar/>

<div class="slot"><slot /></div>

<Footer/>