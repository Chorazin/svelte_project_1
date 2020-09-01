<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let items;
  export let active_item;
</script>

<div class='tabs'>
  <ul>
    {#each items as item}
      <li on:click={() => dispatch('tab_switch', item)}>
        <div class:active={item === active_item}>{item}</div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .active {
    color: #d91b42;
    border-bottom: 2px solid #d91b42;
    padding-bottom: 8px;
  }

  .tabs {
    margin-bottom: 40px;
  }

  ul{
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }

  li {
    margin: 0 16px;
    font-size: 18px;
    color: #555;
    cursor: pointer;
  }
</style>
