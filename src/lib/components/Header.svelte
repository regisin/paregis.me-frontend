<script>
  export let brand;
  export let items;
  export let path;
</script>

<header>
  <div>
    <a href={brand.url}>{brand.title}</a>
    <nav>
      {#each items as item}
        <a sveltekit:prefetch class:active={path === item.url} href={item.url}
          >{item.title}</a
        >
      {/each}
    </nav>
  </div>
</header>

<style lang="postcss" global>
  :local(header) {
    @apply border-b border-b-primary-lightest py-2
    dark:bg-primary-dark
    text-primary-darkest dark:text-primary-light;
  }
  :local(header) div {
    @apply flex justify-between mx-auto md:max-w-3xl;
  }
  :local(header) div a {
    @apply font-bold;
  }
  :local(header) div nav {
    @apply space-x-4;
  }
  :local(header) div nav a {
    @apply hover:underline font-normal;
  }
  :local(.active) {
    @apply font-bold;
  }
</style>
