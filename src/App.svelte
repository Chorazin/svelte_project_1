<script>
	import Header from './components/Header.svelte'
	import Footer from './components/Footer.svelte'
	import Create_Poll from './components/Create_Poll_Form.svelte'
	import Tabs from './shared/Tabs.svelte'

	//tabs variables
	let items = ['current_polls', 'add_new_poll'];
	let active_item = 'current_polls';

	const tab_switcher = (e) => {
		active_item = e.detail
	}
</script>

<Header />
<main>
	<Tabs {items} {active_item} on:tab_switch={tab_switcher}/>
	{#if active_item === 'current_polls'}
		<p>Poll list component goes here</p>

	{:else if active_item === 'add_new_poll'}
		<Create_Poll />

	{/if}

</main>
<Footer />


<style>
main {
	max-width: 960px;
	margin: 40px auto;
}
</style>
