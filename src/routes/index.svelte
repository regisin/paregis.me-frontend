<script context="module">
	export async function load({ page, fetch }) {
		const res = await fetch(`https://paregisme.herokuapp.com/articles`);
		const posts = await res.json();
    const host = page.host;
		return { props: { posts, host } };
	}
</script>

<script>
  // import { dark } from '$lib/components/store/global.js';

  import PageTitle from "$lib/components/PageTitle.svelte";
  import marked from "marked";

  export let posts;
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
  <title>{host}</title>
</svelte:head>

<PageTitle title="Latest" />

<ul>
  {#each posts as post}
  <li>
    <article>
    <dl>
      <dt>Published on</dt>
      <dd>
        <time datetime="{post.published_at}">
          {dateFormatter(post.published_at)}
        </time>
      </dd>
    </dl>
    <div class="div1">
        <h2>
          <a href="/blog/{post.slug}">{post.title}</a>
		    </h2>
        <div class="div3">{@html marked(post.content)}</div>
	  <div class="div4">
		  <a href="/blog/{post.slug}">Read more</a>
	  </div>
    </div>
    </article>
  </li>
  {/each}
</ul>

<style lang="postcss" global>
  :local(ul) {
    @apply divide-y
            /* light theme colors */
            divide-primary
            /* dark theme colors */
            dark:divide-primary-light
            ;
  }
  :local(article) {
    @apply space-y-2 pt-4 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline;
  }
  :local(dt) {
    @apply sr-only;
  }
  :local(dd) {
    @apply leading-6 font-medium
            /* light theme colors */
            text-primary-darkest
            /* dark theme colors */
            dark:text-primary-light;
  }
  :local(.div1) {
    @apply space-y-5 py-0 xl:col-span-3;
  }
  :local(h2) {
    @apply font-bold break-normal pt-6 pb-2 text-xl md:text-2xl;
  }
  :local(a) {
    @apply hover:underline
            /* light theme colors */
            text-primary hover:text-primary-dark
            /* dark theme colors */
            dark:text-primary-light dark:hover:text-primary-lightest
            ;
  }
  :local(.div3) {
    @apply py-0 max-w-none
            /* light theme colors */
            text-primary
            /* dark theme colors */
            dark:text-primary-light
            ;
  }
  :local(.div4) {
    @apply pt-0 pb-4 leading-6 font-medium;
  }
</style>