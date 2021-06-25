<script context="module">
	export async function load({ fetch, page }) {
		const res = await fetch(`https://paregisme.herokuapp.com/articles?slug=${page.params.slug}`);
		const posts = await res.json();
		const post = posts[0];
		const host = page.host
		return { props: { post, host } };
	}
</script>

<script>
	import PageTitle from "$lib/components/PageTitle.svelte";
	import marked from "marked";
	export let post;
	export let host;

	function dateFormatter(dateString) {
		const date = new Date(dateString);
		const options = { month: 'long'};
		const month = new Intl.DateTimeFormat('en-US', options).format(date);
		const day = date.getDate();
		const year = date.getFullYear();
		return month + ' ' + day + ', ' + year;
	} 
</script>

<svelte:head>
  <title>{post.title} | {host}</title>
</svelte:head>

<p>&lt; <a href="/">BACK TO HOME</a></p>
<PageTitle title="{post.title}" />

<dl>
	<dt>Published &nbsp;</dt>
	<dd>
	  <time datetime="{post.published_at}">
		{dateFormatter(post.published_at)}
	  </time>
	</dd>
</dl>

<article>
	{@html marked(post.content)}
</article>

<style lang="postcss" global>
	:local(p) {
		@apply md:text-sm font-bold;
	}
	:local(p) a {
		@apply md:text-sm font-bold no-underline hover:underline;
	}
	:local(h1) {
		@apply font-bold break-normal pt-6 pb-2 text-3xl md:text-4xl;
	}
	:local(dl) {
		@apply flex text-sm font-normal;
	}
	:local(article) {
		@apply py-6;
	}
	:local(article) p {
		@apply text-xl;
	}
</style>