import { writable } from 'svelte/store';


const Poll_Store = writable([
  {
    id:1,
    question: 'Pyhton or JS?',
    answer_a: 'Python',
    answer_b: 'JS',
    vote_a: 9,
    vote_b: 18
  }
]);


export default Poll_Store;
