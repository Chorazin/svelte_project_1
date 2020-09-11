<script>
  import Poll_Store from '../store/poll_store.js'
  import Poll_Details from './poll_details.svelte';


  // Explicitly subscribing and unsubscribing to the data poll_store
  //import { onMount } from 'svelte';
  //import { onDestroy } from 'svelte';
  //export let polls = [];


  // const unsub = Poll_Store.subscribe((data) => {
  //   polls = data;
  // });
  //
  // onMount(() => {
  //   console.log('MOUNTED');
  // });
  //
  // onDestroy(() => {
  //   unsub();
  // });



</script>


<div class='poll_list'>
  <!-- $Poll_Store will grab the poll data from the data store as poll within the #each function. And automatically subscribe and unsubscribe from the data store on mount and destroy-->
  {#each $Poll_Store as poll (poll.id)}
    <div>
      <Poll_Details {poll} />
    </div>
  {/each}
</div>



<style>
  .poll_list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
