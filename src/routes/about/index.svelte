<script context="module">
	export async function load({ fetch, page }) {
		const res = await fetch(`https://paregisme.herokuapp.com/pages?slug=about`);
		const posts = await res.json();
		const post = posts[0];
		const host = post.host
		return { props: { page: post, host } };
	}
</script>

<script>
  import marked from "marked";

  import PageTitle from "$lib/components/PageTitle.svelte";
  export let page;
  export let host;
</script>

<svelte:head>
  <title>About | {host}</title>
</svelte:head>

<PageTitle title="{page.title}" />
<br>
{@html marked(page.content)}