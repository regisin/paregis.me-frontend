<script context="module">
    import marked from "marked";
	export async function load({ page, fetch }) {
		const res = await fetch(`https://paregisme.herokuapp.com/publications`);
		let papers = await res.json();
        papers.forEach((paper) => {
            paper.citation = marked(paper.citation);
        });
        papers = papers.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.date) - new Date(a.date);
        });

		return { props: { papers, page } };
	}
</script>

<script>
	export let papers;
    export let page;

    const host = page.host;
    const path = page.path;
</script>

<svelte:head>
  <meta name="robots" content="index,follow">
  <meta name="googlebot" content="index,follow">
  <meta name="author" content="PA Regis">
  <meta name="keywords" content="networking, wireless, web development, python, fastapi, javascript, svelte, sveltekit, programming, computer programming, software engineering" />

  <meta name="description" content="List of peer-reviewed publications.">
  <meta property="og:description" content="List of peer-reviewed publications." />

  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="paregis">
  <meta property="og:site_name" content="{host}">
  <meta property="og:locale" content="en_US">
  <meta property="og:type" content="article">

  <meta property="og:url" content="https://{host}{path}">
  <link rel="canonical" href="https://{host}{path}">

  <title>Publications | {host}</title>
  <meta property="og:title" content="Publications | {host}">
  <meta name="twitter:title" content="Publications | {host}">
</svelte:head>

<h1>Publications</h1>

<h2>Journal articles</h2>

<p>Articles published in peer-reviewed journals and magazines.</p>
<br>
<ul>
{#each papers as paper }
	{#if paper.publication_type.type == "Journal"}
		<li>
            <a sveltekit:prefetch href="/publications/{paper.slug}">{@html paper.citation}</a>
            {#each paper.files as file}
                <a href="{file.url}">
                    {#if file.mime == "application/pdf"}
                    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                        <line x1="9" y1="9" x2="10" y2="9" />
                        <line x1="9" y1="13" x2="15" y2="13" />
                        <line x1="9" y1="17" x2="15" y2="17" />
                    </svg>
                    {:else if file.mime == "application/vnd.openxmlformats-officedocument.presentationml.presentation"}
                    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <line x1="3" y1="4" x2="21" y2="4" />
                        <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
                        <line x1="12" y1="16" x2="12" y2="20" />
                        <line x1="9" y1="20" x2="15" y2="20" />
                        <path d="M8 12l3 -3l2 2l3 -3" />
                    </svg>
                    {:else if file.mime == "video/mp4"}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="23 7 16 12 23 17 23 7" />
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                    </svg>
                    {/if}
                </a>
            {/each}
        </li>
	{/if}
{/each}
</ul>

<br><br>

<h2>Conference papers</h2>
<p>Papers published in peer-reviewed conference proceedings.</p>
<br>
<ul>
{#each papers as paper }
	{#if paper.publication_type.type == "Conference"}
		<li>
            <a sveltekit:prefetch href="/publications/{paper.slug}">{@html marked(paper.citation)}</a>
            {#each paper.files as file}
                <a href="{file.url}">
                    {#if file.mime == "application/pdf"}
                    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                        <line x1="9" y1="9" x2="10" y2="9" />
                        <line x1="9" y1="13" x2="15" y2="13" />
                        <line x1="9" y1="17" x2="15" y2="17" />
                    </svg>
                    {:else if file.mime == "application/vnd.openxmlformats-officedocument.presentationml.presentation"}
                    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <line x1="3" y1="4" x2="21" y2="4" />
                        <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
                        <line x1="12" y1="16" x2="12" y2="20" />
                        <line x1="9" y1="20" x2="15" y2="20" />
                        <path d="M8 12l3 -3l2 2l3 -3" />
                    </svg>
                    {:else if file.mime == "video/mp4"}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="23 7 16 12 23 17 23 7" />
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                    </svg>
                    {/if}
                </a>
            {/each}
        </li>
	{/if}
{/each}
</ul>

<style lang="postcss" global>
	:local(h2) {
		@apply font-bold break-normal pt-6 pb-2 text-xl md:text-2xl;
	}
    :local(h3) {
		@apply font-bold break-normal pt-6 pb-2 text-lg md:text-xl;
	}
    :local(p) {
        @apply text-sm mb-2;
    }
    :local(a) {
        @apply hover:underline;
    }
    :local(li) {
        @apply flex mb-2;
    }
    :local(svg) {
        @apply hover:text-white;
    }
</style>