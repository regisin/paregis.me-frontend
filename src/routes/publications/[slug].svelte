<script context="module">
    import marked from "marked";
	export async function load({ fetch, page }) {
		const res = await fetch(`https://paregisme.herokuapp.com/publications/${page.params.slug}`);
		let paper = await res.json();
        paper.citation = marked(paper.citation);
        if (paper.resources) {
            paper.resources = marked(paper.resources);
        }
		return { props: { paper, page } };
	}
</script>

<script>
    import copy from "clipboard-copy";
	
	export let paper;
    export let page;

    const host = page.host;
    const path = page.path;

	function dateFormatter(dateString) {
		const date = new Date(dateString);
		const options = { month: 'long'};
		const month = new Intl.DateTimeFormat('en-US', options).format(date);
		const day = date.getDate();
		const year = date.getFullYear();
		return month + ' ' + year;
	}
</script>

<svelte:head>
  <meta name="robots" content="index,follow">
  <meta name="googlebot" content="index,follow">
  <meta name="author" content="PA Regis">
  <meta name="keywords" content="networking, wireless, web development, python, fastapi, javascript, svelte, sveltekit, programming, computer programming, software engineering" />

  <meta name="description" content="{paper.abstract}">
  <meta property="og:description" content="{paper.abstract}" />

  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="paregis">
  <meta property="og:site_name" content="{host}">
  <meta property="og:locale" content="en_US">
  <meta property="og:type" content="article">

  <meta property="og:url" content="https://{host}{path}">
  <link rel="canonical" href="https://{host}{path}">

  <title>{paper.title} | {host}</title>
  <meta property="og:title" content="{paper.title} | {host}">
  <meta name="twitter:title" content="{paper.title} | {host}">
</svelte:head>

<p>&lt; <a href="/">BACK TO HOME</a></p>
<h1>{paper.title}</h1>

<dl>
	<dt>Published &nbsp;</dt>
	<dd>
	  <time datetime="{paper.date}">
		{dateFormatter(paper.date)}
	  </time>
	</dd>
</dl>

<h2>Abstract</h2>
<p>{paper.abstract}</p>

<h2>Citation</h2>
<pre>
<code>{@html paper.citation}</code><button on:click={copy(paper.citation)}>
        <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="8" y="8" width="12" height="12" rx="2"/>
            <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"/>
        </svg>
    </button>
</pre>

<h2>Bibtex</h2>
<input type="text" class="hidden" value="{paper.bibtex}"/>

<pre><code>{paper.bibtex}</code>
    
<button on:click={copy(paper.bibtex)}>
        <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="8" y="8" width="12" height="12" rx="2"/>
            <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"/>
        </svg>
    </button>
</pre>

<h2>Authors</h2>
<ul>
	{#each paper.co_authors as person}
		<li>
			{person.name}, {person.affiliation} {#if person.url != ""}<a href="{person.url}">{person.url}</a>{/if}
		</li>
	{/each}
</ul>

{#if paper.resources}
<h2>Resources</h2>
{@html paper.resources}
{/if}

{#if paper.files.length > 0}
<h2>Files</h2>
<table class="table-auto">
    <thead>
        <tr>
            <th>Filename</th>
            <th>Link</th>
        </tr>
    </thead>
    <tbody>
        {#each paper.files as file, i}
        <tr>
            <td>
                <a href="{file.url}">{file.alternativeText ? file.alternativeText:file.name}</a>
            </td>
            <td>
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
            </td>
        </tr>
        {/each}
    </tbody>
</table>
{/if}

<style lang="postcss" global>
    :local(a) {
        @apply hover:underline;
    }
	:local(p) {
		@apply md:text-sm;
	}
	:local(p) a {
		@apply md:text-sm font-bold no-underline hover:underline;
	}
	:local(h1) {
		@apply font-bold break-normal pt-6 pb-2 text-3xl md:text-4xl;
	}
    :local(h2) {
		@apply font-bold break-normal pt-6 pb-2 text-xl md:text-2xl;
	}
	:local(dl) {
		@apply flex text-sm font-normal;
	}
    :local(pre) {
        @apply overflow-x-auto p-6 text-sm leading-snug
                border rounded-xl
                text-primary-light bg-primary-dark;
    }
    :local(svg) {
        @apply hover:text-white;
    }
</style>