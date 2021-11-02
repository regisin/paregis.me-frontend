<script context="module">
  export async function load({ page, fetch }) {
    const res = await fetch(`https://paregisme.herokuapp.com/articles`);
    let posts = await res.json();
    posts = posts.sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.published_at) - new Date(a.published_at);
    });
    return { props: { posts, page } };
  }
</script>

<script>
  import { hero } from "$lib/components/store/global.js";
  $hero = { title: "Latest" };

  export let posts;
  export let page;

  const host = page.host;

  function dateFormatter(dateString) {
    const date = new Date(dateString);
    const options = { month: "long" };
    const month = new Intl.DateTimeFormat("en-US", options).format(date);
    const day = date.getDate();
    const year = date.getFullYear();
    return month + " " + day + ", " + year;
  }
</script>

<svelte:head>
  <meta name="robots" content="index,follow" />
  <meta name="googlebot" content="index,follow" />
  <meta name="author" content="PA Regis" />
  <meta
    name="keywords"
    content="networking, wireless, web development, python, fastapi, javascript, svelte, sveltekit, programming, computer programming, software engineering"
  />

  <meta
    name="description"
    content="PA Regis: yet another personal blog website about various topics."
  />
  <meta
    property="og:description"
    content="PA Regis: yet another personal blog website about various topics."
  />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="paregis" />
  <meta property="og:site_name" content={host} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="article" />

  <meta property="og:url" content="https://{host}" />
  <link rel="canonical" href="https://{host}" />

  <title>Home | {host}</title>
  <meta property="og:title" content="Home | {host}" />
  <meta name="twitter:title" content="Home | {host}" />
</svelte:head>

<ul>
  {#each posts as post}
    <li>
      <article>
        <div>
          <h2>
            <a sveltekit:prefetch href="/blog/{post.slug}">{post.title}</a>
          </h2>
          <time datetime={post.published_at}>
            {dateFormatter(post.published_at)}
          </time>
          <p>{post.description}</p>
        </div>
      </article>
    </li>
  {/each}
</ul>

<style lang="postcss" global>
  :local(article) {
    @apply space-y-2 pt-4 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline;
  }
  :local(article) div {
    @apply space-y-5 py-0 xl:col-span-3;
  }
</style>
