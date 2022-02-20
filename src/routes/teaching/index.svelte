<script context="module">
  import { marked } from "marked";
  export async function load({ fetch, url }) {
    const res = await fetch(`https://paregisme.herokuapp.com/teaching`);
    let content = await res.json();
    content.content = marked(content.content);
    return { props: { content, url } };
  }
</script>

<script>
  import { hero } from "$lib/components/store/global.js";
  $hero = { title: "Teaching" };

  export let url;
  export let content;

  const host = url.hostname;
  const path = url.pathname;
</script>

<svelte:head>
  <meta name="robots" content="index,follow" />
  <meta name="googlebot" content="index,follow" />
  <meta name="author" content="PA Regis" />
  <meta
    name="keywords"
    content="networking, wireless, web development, python, fastapi, javascript, svelte, sveltekit, programming, computer programming, software engineering"
  />

  <meta name="description" content={content.seo.metaDescription} />
  <meta property="og:description" content={content.seo.metaDescription} />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="paregis" />
  <meta property="og:site_name" content={host} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="article" />

  <meta property="og:url" content="https://{host}{path}" />
  <link rel="canonical" href="https://{host}{path}" />

  <title>Teaching | {host}</title>
  <meta property="og:title" content="Teaching | {host}" />
  <meta name="twitter:title" content="Teaching | {host}" />
</svelte:head>

<article>
  {@html content.content}
</article>