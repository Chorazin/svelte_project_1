<script>
  export let poll;

  //reactive values
  $: total_votes = poll.vote_a + poll.vote_b;
</script>

<div class='poll'>
  <h3>{poll.question}</h3>
  <p>Total Votes: {total_votes}</p>
  <div class='answer'>
    <div class='percent percent_a'>

    </div>
    <span>{poll.answer_a} ({poll.vote_a})</span>
  </div>

  <div class='answer'>
    <div class='percent percent_b'>

    </div>
    <span>{poll.answer_b} ({poll.vote_b})</span>
  </div>
</div>


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
</style>
