<script context="module">
	export async function load({ fetch, page }) {
		const res = await fetch(`https://paregisme.herokuapp.com/teaching`);
        const page_content = await res.json();
		return { props: { page_content, page } };
	}
</script>

<script>
    import SvelteSeo from "svelte-seo";
    import marked from "marked";
    import PageTitle from '$lib/components/PageTitle.svelte';
    export let page;
    export let page_content;

    const host = page.host;
    const path = page.path;
</script>

<SvelteSeo
	title="Teaching | {host}"
	description="{page_content.seo.metaDescription}" 
	canonical="https://{host}{path}"
/>

<PageTitle title="Teaching" />

<article>
    {@html marked(page_content.content) }
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