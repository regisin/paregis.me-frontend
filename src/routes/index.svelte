<script context="module">
	export async function load({ page, fetch }) {
		const res = await fetch(`https://paregisme.herokuapp.com/articles`);
		let posts = await res.json();
    posts = posts.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.published_at) - new Date(a.published_at);
        });
		return { props: { posts, page } };
	}
</script>

<script>
  export let posts;
  export let page;

  const host = page.host;

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
  <meta name="robots" content="index,follow">
  <meta name="googlebot" content="index,follow">
  <meta name="author" content="PA Regis">
  <meta name="keywords" content="networking, wireless, web development, python, fastapi, javascript, svelte, sveltekit, programming, computer programming, software engineering" />

  <meta name="description" content="PA Regis: yet another personal blog website about various topics.">
  <meta property="og:description" content="PA Regis: yet another personal blog website about various topics." />

  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="paregis">
  <meta property="og:site_name" content="{host}">
  <meta property="og:locale" content="en_US">
  <meta property="og:type" content="article">

  <meta property="og:url" content="https://{host}">
  <link rel="canonical" href="https://{host}">

  <title>Home | {host}</title>
  <meta property="og:title" content="Home | {host}">
  <meta name="twitter:title" content="Home | {host}">
</svelte:head>

<h1>Latest</h1>

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
          <a sveltekit:prefetch href="/blog/{post.slug}">{post.title}</a>
		    </h2>
        <div class="div3">{post.description}</div>
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
</style>