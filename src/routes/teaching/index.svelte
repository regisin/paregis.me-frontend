<script context="module">
	import marked from "marked";
	export async function load({ fetch, page }) {
		const res = await fetch(`https://paregisme.herokuapp.com/teaching`);
        let content = await res.json();
		content.content = marked(content.content);
		return { props: { content, page } };
	}
</script>

<script>
    import SvelteSeo from "svelte-seo";
    
    import PageTitle from '$lib/components/PageTitle.svelte';
    export let page;
	export let content;

    const host = page.host;
    const path = page.path;
</script>

<SvelteSeo
	title="Teaching | {host}"
	description="{content.seo.metaDescription}" 
	canonical="https://{host}{path}"
/>

<PageTitle title="Teaching" />

<article>
    {@html content.content}
</article>

<style lang="postcss" global>
    :local(article) h1 {
		@apply break-normal pt-6 pb-2 text-3xl md:text-4xl;
	}
	:local(article) h2 {
		@apply break-normal pt-6 pb-2 text-xl md:text-2xl;
	}
    :local(article) h3 {
		@apply break-normal pt-6 pb-2 text-lg md:text-xl;
	}
</style>