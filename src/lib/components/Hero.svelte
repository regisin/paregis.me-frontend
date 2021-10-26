<script>
  export let hero;
</script>

<div id="hero">
  <div>
    <h1>
      {hero.title}
    </h1>
  </div>
</div>

<style lang="postcss" global>
  :local(#hero) {
    @apply flex flex-wrap h-48 text-primary-lightest
    bg-gradient-to-tr 
  from-primary-darkest via-primary to-primary-lightest;
  }
  :local(#hero) div {
    @apply relative container mx-auto md:max-w-3xl;
  }
  :local(#hero) div > * {
    @apply absolute bottom-0 left-0;
  }
</style>
