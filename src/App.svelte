<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Create_Poll from './components/Create_Poll_Form.svelte';
	import Tabs from './shared/Tabs.svelte';
	import Poll_List from './components/poll_list.svelte';

	//tabs variables
	let items = ['current_polls', 'add_new_poll'];
	let active_item = 'current_polls';

	const tab_switcher = (e) => {
		active_item = e.detail
	}

	let polls = [
		{
			id:1,
			question: 'Pyhton or JS?',
			answer_a: 'Python',
			answer_b: 'JS',
			vote_a: 9,
			vote_b: 18
		}
	];

	const handle_add = (e) => {

		const poll = e.detail;
		polls = [poll, ...polls];
		console.log(polls);
		active_item = 'current_polls';
	}

	const handle_vote = (e) => {
		const {id, option} = e.detail;
		let copied_polls = [...polls];
		let upvoted_poll = copied_polls.find((p) => p.id == id);

		if(option === 'a') {
			upvoted_poll.vote_a++;
		};

		if(option === 'b') {
			upvoted_poll.vote_b++;
		};

		polls = copied_polls;
	};
</script>

<Header />
<main>
	<Tabs {items} {active_item} on:tab_switch={tab_switcher}/>
	{#if active_item === 'current_polls'}
		<Poll_List {polls} on:vote={handle_vote}/>

	{:else if active_item === 'add_new_poll'}
		<Create_Poll on:add={handle_add}/>

	{/if}

</main>
<Footer />


<style>
main {
	max-width: 960px;
	margin: 40px auto;
}
</style>
