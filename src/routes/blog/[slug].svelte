<script context="module">
	import marked from "marked";
	export async function load({ fetch, page }) {
		const res = await fetch(`https://paregisme.herokuapp.com/articles/${page.params.slug}`);
		let post = await res.json();
		post.content = marked(post.content);
		return { props: { post, page } };
	}
</script>

<script>
	import SvelteSeo from "svelte-seo";
	import PageTitle from "$lib/components/PageTitle.svelte";
	
	export let post;
	export let page;

	const host = page.host;
	const path = page.path;

	function dateFormatter(dateString) {
		const date = new Date(dateString);
		const options = { month: 'long'};
		const month = new Intl.DateTimeFormat('en-US', options).format(date);
		const day = date.getDate();
		const year = date.getFullYear();
		return month + ' ' + day + ', ' + year;
	} 
</script>

<SvelteSeo
	title="{post.title} | {host}"
	description="{post.description}" 
	canonical="https://{host}{path}"
/>

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
	{@html post.content}
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