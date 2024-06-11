<script lang="ts">
  import ColorButton from "./ColorButton.svelte";
  import { colors } from "./Colors";
  import { slide } from 'svelte/transition';

  let showMenu = false;

  function toggleMenu() {
    showMenu = !showMenu;
  }

  let color = "#FFFFFF";

</script>

<style lang="scss">
  @import "$styles";

  .menuButton {
    border: 0;
    background-color: $ui-background;
    border-radius: 15px;
    cursor: pointer;

    transition: 0.15s ease;
  }

  .menuButton:hover {
    background-color: $ui-accent;
    box-shadow: 0px 0px 5px $ui-accent;
  }

  .menu {
    position: absolute;
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
  <div class="menu" transition:slide={{ delay: 0, duration: 300, axis: 'y' }}>
    {#each colors as color}
      <ColorButton name={color.name} color={color.colorBackground}/>
    {/each}
  </div>
{/if}