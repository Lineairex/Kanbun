<script lang="ts">
    export let name = "Default Color";
    export let color = "#FFFFFF";

    export let setColor: any;

    function handleClick() {
        setColor(color);
    }
</script>

<button class="button option" on:click={handleClick}>
    <div id="circle-small" style="background: {color};"></div>
    <div class="name">{name}</div>
</button>

<style lang="scss">
    @import "$styles";

    .option {
        display: flex;
        align-items: center;
        background-color: $ui-background;
        color: $ui-text;
        padding: 5px 5px;
        width: fit-content;

        border-radius: 20px;
        border: 10px $ui-background;

        cursor: pointer;

        @include default-font;
    }

    .name {
        padding: 5px 5px;
    }
</style>
