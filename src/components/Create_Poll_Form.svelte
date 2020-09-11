<script>
  import Button from '../shared/button.svelte';
  import { createEventDispatcher } from 'svelte';
  import Poll_Store from '../store/poll_store.js'

  let dispatch = createEventDispatcher();

  let fields = {question: '', answer_a: '', answer_b: ''};
  let errors = {question: '', answer_a: '', answer_b: ''};
  let valid = false;

  const submit = () => {
    valid = true;

    //check question
    if(fields.question.trim().length < 5) {
      valid = false;
      errors.question = 'Question must be at least 5 chars long';
    } else {
      errors.question = '';
    }

    //check field A
    if(fields.answer_a.trim().length < 1) {
      valid = false;
      errors.answer_a = 'Answer A cannot be empty';
    } else {
      errors.answer_a = '';
    }

    //check field B
    if(fields.answer_b.trim().length < 1) {
      valid = false;
      errors.answer_b = 'Answer B cannot be empty';
    } else {
      errors.answer_b = '';
    }

    //ass a new Poll
    if(valid) {
      let poll = {...fields, vote_a: 0, vote_b: 0, id: Math.random()};
      //save poll to data store
      Poll_Store.update ((current_data) => {
        return [poll, ...current_data];
      });
      dispatch('add');
    }
  }
</script>
  <form on:submit|preventDefault = {submit}>
    <div class='form_field'>
      <label for='question'>Poll Question:</label>
      <input type='text' id='question' bind:value={fields.question}>
      <div class='error'>
        {errors.question}
      </div>
    </div>

    <div class='form_field'>
      <label for='answer_a'>Answer A:</label>
      <input type='text' id='answer_a' bind:value={fields.answer_a}>
      <div class='error'>
        {errors.answer_a}
      </div>
    </div>

    <div class='form_field'>
      <label for='answer_b'>Answer B:</label>
      <input type='text' id='answer_b' bind:value={fields.answer_b}>
      <div class='error'>
        {errors.answer_b}
      </div>
    </div>

    <Button type='secondary' flat={true}>Add Poll</Button>
  </form>
<style>
form {
  width: 400px;
  margin: 0 auto;
  text-align: center;
}

.form_field {
  margin: 18px auto;
}

input {
  width: 100%;
  border-radius: 6px;
}

label {
  margin: 10px auto;
  text-align: left;
}

.error {
  font-weight: bold;
  font-size: 12px;
  color: #d91b42;
}
</style>
