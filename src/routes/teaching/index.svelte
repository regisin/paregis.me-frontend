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
    export let page;
	export let content;

    const host = page.host;
    const path = page.path;
</script>

<svelte:head>
  <meta name="robots" content="index,follow">
  <meta name="googlebot" content="index,follow">
  <meta name="author" content="PA Regis">
  <meta name="keywords" content="networking, wireless, web development, python, fastapi, javascript, svelte, sveltekit, programming, computer programming, software engineering" />

  <meta name="description" content="{content.seo.metaDescription}">
  <meta property="og:description" content="{content.seo.metaDescription}" />

  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="paregis">
  <meta property="og:site_name" content="{host}">
  <meta property="og:locale" content="en_US">
  <meta property="og:type" content="article">

  <meta property="og:url" content="https://{host}{path}">
  <link rel="canonical" href="https://{host}{path}">

  <title>Teaching | {host}</title>
  <meta property="og:title" content="Teaching | {host}">
  <meta name="twitter:title" content="Teaching | {host}">
</svelte:head>

<h1>Teaching</h1>

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