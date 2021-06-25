<script>
    export let title;
</script>

<h1>{title}</h1>

<style lang="postcss" global>
    :local(h1) {
		@apply font-bold break-normal pt-6 pb-2 text-3xl md:text-4xl;
	}
</style>