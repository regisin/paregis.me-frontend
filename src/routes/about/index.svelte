<script context="module">
	export async function load({ fetch, page }) {
		const res = await fetch(`https://paregisme.herokuapp.com/about`);
		const page_content = await res.json();
		return { props: { page , page_content } };
	}
</script>

<script>
	import SvelteSeo from "svelte-seo";
	import marked from "marked";

	import PageTitle from "$lib/components/PageTitle.svelte";
	export let page;
	export let page_content;

	const host = page.host;
	const path = page.path;
</script>

<SvelteSeo
	title="About | {host}"
	description="{page_content.description}" 
	canonical="https://{host}{path}"
/>

<PageTitle title="About"/>

<article>
	{@html marked(page_content.content)}
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