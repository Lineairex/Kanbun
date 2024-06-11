<script lang="ts">
  import ColorButton from "./ColorButton.svelte";
  import { colors } from "./Colors";

  let showMenu = false;

  function toggleMenu() {
    showMenu = !showMenu;
  }

  function setColor(color: string) {
    const colorCircles = document.querySelectorAll('.color-circle');

    colorCircles.forEach(circle => {
      const circleElement = circle as HTMLElement;
      circleElement.style.backgroundColor = color;
    });
  }

  let color = "#FFFFFF";

</script>

<style lang="scss">
  @import "$styles";

  .menuButton {
    border: 0;
    background-color: $ui-background;
    border-radius: 15px;
  }

  .menu {
    background-color: $ui-background;
    width: fit-content;
    height: fit-content;
    border-radius: 15px;
  }
</style>

<button class="menuButton" on:click={toggleMenu}>
  <img alt="menuButton" src="icons/color-bucket.svg" height=30px/>
</button>

{#if showMenu}
  <div class="menu">
    {#each colors as color}
      <ColorButton name={color.name} color={color.colorBackground} {setColor}/>
    {/each}
  </div>
{/if}