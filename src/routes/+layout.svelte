<script>
    import Menubar from "../lib/bars/Menubar.svelte";
    import Footer from "../lib/bars/Footer.svelte";
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

    
</style>

<Menubar/>

<div><slot /></div>

<Footer/>