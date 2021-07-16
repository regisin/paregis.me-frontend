<script context="module">
	import marked from "marked";

	export async function load({ fetch, page }) {
		const res = await fetch(`https://paregisme.herokuapp.com/about`);
		let content = await res.json();
		content.content = marked(content.content);
		return { props: { page , content } };
	}
</script>

<script>
	import SvelteSeo from "svelte-seo";

	import PageTitle from "$lib/components/PageTitle.svelte";
	export let page;
	export let content;

	const host = page.host;
	const path = page.path;
</script>

<SvelteSeo
	title="About | {host}"
	description="{content.description}" 
	canonical="https://{host}{path}"
/>

<PageTitle title="About"/>

<article>
	{@html content.content}
</article>

<style lang="postcss" global>
	:local(article) {
		@apply py-6;
	}
	:local(article) h1 {
		@apply text-2xl font-bold pb-2;
	}
	:local(article) h2 {
		@apply text-xl font-bold pb-2;
	}
	:local(article) h3 {
		@apply text-lg font-bold pb-2;
	}
</style>