<script context="module">
  import { dev } from "$app/env";

  export async function load({ page }) {
    const path = page.path;
    return {
      props: { path },
    };
  }
</script>

<script>
  import { dark, hero } from "$lib/components/store/global.js";

  import SvelteCsp from "$lib/components/SvelteCsp.svelte";
  import LightBulb from "$lib/components/LightBulb.svelte";
  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import "../app.postcss";

  export let path;

  const brand = { url: "/", title: "paregis.me" };
  const items = [
    { url: "/about", title: "About" },
    { url: "/teaching", title: "Teaching" },
    { url: "/publications", title: "Publications" },
    { url: "/contact", title: "Contact" },
  ];
</script>

<SvelteCsp
  defaultSrc={["'self'"]}
  imgSrc={["'self'", "data:", "blob:", "res.cloudinary.com"]}
  styleSrc={["'self'", "'unsafe-inline'"]}
  scriptSrc={["'self'", "'unsafe-inline'", "'unsafe-eval'"]}
  connectSrc={[
    "'self'",
    "paregisme.herokuapp.com",
    "paregisme-prophet.herokuapp.com",
    "*.google.com"
  ]}
  devMode={dev}
/>

<svelte:head>
  <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "81nimqyzjl");
  </script>
</svelte:head>

<div id="theme" class:dark={$dark}>
  {#if dev}<LightBulb />{/if}
  <Header {brand} {items} {path} />
  <main>
    {#if $hero}
    <Hero hero={$hero} />  
    {/if}
    <!--Container-->
    <div id="container">
      <slot />
    </div>
  </main>
  <Footer />
</div>

<style lang="postcss" global>
  h1 {
    @apply text-3xl font-bold pb-2 pt-6;
  }
  h2 {
    @apply text-xl font-bold pb-2 pt-6;
  }
  h3 {
    @apply text-lg font-bold pb-2 pt-6;
  }
  article ul {
    @apply list-disc;
  }
  article pre {
    @apply overflow-x-auto p-6 text-sm leading-snug
                border rounded-xl
                text-primary-light bg-primary-dark;
  }

  #theme {
    @apply flex flex-col min-h-screen;
  }
  main {
    @apply flex-grow overflow-auto
                /* light theme colors */
                text-primary
                /* dark theme colors */
                dark:bg-primary-dark dark:text-primary-light;
  }
  main a {
    @apply hover:underline text-info;
  }
  #container {
    @apply container mx-auto py-10 md:max-w-3xl;
  }
</style>
