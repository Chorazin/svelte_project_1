<script>
  import Card from '../shared/card.svelte';
  import Poll_Store from '../store/poll_store.js';

  export let poll;

  //reactive values
  $: total_votes = poll.vote_a + poll.vote_b;
  $: width_percent_a = Math.floor(100 / total_votes * poll.vote_a);
  $: width_percent_b = Math.floor(100 / total_votes * poll.vote_b);
  //handling vote clicks
  const handle_vote = (option, id) => {
    Poll_Store.update ((current_data) => {
      let copied_polls = [...current_data];
  		let upvoted_poll = copied_polls.find((p) => p.id == id);

  		if(option === 'a') {
  			upvoted_poll.vote_a++;
  		};

  		if(option === 'b') {
  			upvoted_poll.vote_b++;
  		};

  		return copied_polls;
    });
  };
</script>


<Card>
  <div class='poll'>
    <h3>{poll.question}</h3>
    <p>Total Votes: {total_votes}</p>
    <div class='answer' on:click={() => handle_vote('a', poll.id)}>
      <div class='percent percent_a' style='width: {width_percent_a}%'>

      </div>
      <span>{poll.answer_a} ({poll.vote_a})</span>
    </div>

    <div class='answer' on:click={() => handle_vote('b', poll.id)}>
      <div class='percent percent_b' style='width: {width_percent_b}%'>

      </div>
      <span>{poll.answer_b} ({poll.vote_b})</span>
    </div>
  </div>
</Card>


<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }

  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }

  .answer {
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }

  .answer:hover {
    opacity: 0.6;
  }

  span {
    display: inline-block;
    padding: 10px 20px;
  }

  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }

  .percent_a {
    background: rgba(217,27,66,0.2);
    border-left: 4px solid #d91b42;
  }

  .percent_b {
    background: rgba(69,196,150,0.2);
    border-left: 4px solid #45c496;
  }
</style>
