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
	import { hero } from "$lib/components/store/global.js";

	export let page;
	export let content;

	$hero = {
		title: 'About',
		image: content.seo.shareImage.formats.large.url
	}

	
	const host = page.host;
	const path = page.path;
</script>

<svelte:head>
  <meta name="robots" content="index,follow">
  <meta name="googlebot" content="index,follow">
  <meta name="author" content="PA Regis">
  <meta name="keywords" content="networking, wireless, web development, python, fastapi, javascript, svelte, sveltekit, programming, computer programming, software engineering" />

  <meta name="description" content="{content.description}">
  <meta property="og:description" content="{content.description}" />

  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="paregis">
  <meta property="og:site_name" content="{host}">
  <meta property="og:locale" content="en_US">
  <meta property="og:type" content="article">

  <meta property="og:url" content="https://{host}{path}">
  <link rel="canonical" href="https://{host}{path}">

  <title>About | {host}</title>
  <meta property="og:title" content="About | {host}">
  <meta name="twitter:title" content="About | {host}">
</svelte:head>

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