<script>
  let fields = {question: '', answer_a: '', answer_b: ''};

  const submit = () => {
    console.log(fields);
  }
</script>
  <form on:submit|preventDefault = {submit}>
    <div class='form_field'>
      <label for='question'>Poll Question:</label>
      <input type='text' id='question' bind:value={fields.question}>
    </div>

    <div class='form_field'>
      <label for='answer_a'>Answer A:</label>
      <input type='text' id='answer_a' bind:value={fields.answer_a}>
    </div>

    <div class='form_field'>
      <label for='answer_b'>Answer B:</label>
      <input type='text' id='answer_b' bind:value={fields.answer_b}>
    </div>

    <button>Add Poll</button>
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
</style>
