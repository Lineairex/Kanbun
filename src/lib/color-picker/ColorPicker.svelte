<script>
    import { onMount } from "svelte";
    let showMenu = false;
    let colors = ['#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#800080'];
    
    function toggleMenu() {
      showMenu = !showMenu;
    }
  </script>
  
<style> 
.picker-container {
    position: relative;
    display: inline-block;
}

.menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 120px;
    padding: 10px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    position: absolute;
    top: -140px; /* Adjust based on your design */
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  .menu:before {
    content: "";
    position: absolute;
    bottom: -10px; /* Adjust based on your design */
    left: 50%;
    transform: translateX(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: white transparent transparent transparent;
  }

  .button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #ccc;
    background-color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .color-dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    margin: 5px;
  }
</style>

<div class="picker-container">
  <button class="button" on:click={toggleMenu}>
    <div style="width: 10px; height: 10px; background-color: #000;"></div>
  </button>
  {#if showMenu}
    <div class="menu">
      {#each colors as color}
        <div class="color-dot" style="background-color: {color};" on:click={() => console.log(color)}></div>
      {/each}
    </div>
  {/if}
</div>
