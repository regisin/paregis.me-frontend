<script context="module">
	export async function load({ page }) {
        const host = page.host;
		return { props: { host } };
	}
</script>

<script>
  import PageTitle from "$lib/components/PageTitle.svelte";
  export let host;
</script>

<svelte:head>
  <title>About | {host}</title>
</svelte:head>

<PageTitle title="About" />
<br>
