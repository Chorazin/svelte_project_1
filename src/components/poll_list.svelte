<script>
  import Poll_Details from './poll_details.svelte';
  export let polls = [];

</script>


<div class='poll_list'>
  {#each polls as poll (poll.id)}
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
