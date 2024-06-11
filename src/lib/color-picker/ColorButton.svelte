<script lang="ts">
    export let name = "Default Color";
    export let color = "#FFFFFF";

    export let id = '.color-circle';

    function setColor() {
    const colorCircles = document.querySelectorAll(id);

    colorCircles.forEach(circle => {
      const circleElement = circle as HTMLElement;
      circleElement.style.backgroundColor = color;
    });
  }
</script>

<button class="button option" on:click={setColor}>
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

        border-radius: 20px;
        border: 10px $ui-background;

        cursor: pointer;

        transition: 0.15s ease;

        @include default-font;
    }

    .option:hover {
        box-shadow:0px 0px 5px $ui-accent;
        background-color: $ui-accent;
    }

    .name {
        padding: 5px 5px;
    }
</style>
