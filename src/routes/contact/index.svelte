<script context="module">
  export async function load({ url }) {
    return { props: { url } };
  }
</script>

<script>
  import { hero } from "$lib/components/store/global.js";
  $hero = { title: "Contact" };

  export let url;
  const host = url.hostname;
  const path = url.pathname;
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

  <meta property="og:url" content="https://{host}{path}" />
  <link rel="canonical" href="https://{host}{path}" />

  <title>Contact | {host}</title>
  <meta property="og:title" content="Contact | {host}" />
  <meta name="twitter:title" content="Contact | {host}" />
</svelte:head>

<div class="card">
  <div>
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  </div>
  <div>
    <h2>Paulo Alexandre Regis, Ph.D.</h2>
    <p>Assistant Professor of Computer Science</p>
    <p>Southeastern Louisiana University</p>
    <p>Computer Science and Technology Building</p>
    <p>Room 3029</p>
    <p>Hammond, LA 70402</p>
  </div>
</div>

<div class="card">
  <div>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path
        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
      />
    </svg>
  </div>
  <div>
    <h2>Phone</h2>
    <p>+1 (985) 549-2251</p>
  </div>
</div>

<div class="card">
  <div>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  </div>
  <div>
    <h2>Email</h2>
    <p><a href="mailto:pregis@southeastern.edu">pregis@southeastern.edu</a></p>
  </div>
</div>

<div class="card-social">
  <h2>Social media</h2>
  <div>
    <a target="_blank" href="https://paregis.me">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path
          d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
        />
      </svg>
    </a>
    <a target="_blank" href="https://twitter.com/paregis" rel="noopener">
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
        />
      </svg>
    </a>
    <a target="_blank" href="https://github.com/regisin" rel="noopener">
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
        />
      </svg>
    </a>
    <a
      target="_blank"
      href="https://www.linkedin.com/in/regisin/"
      rel="noopener"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    </a>
  </div>
</div>

<style lang="postcss" global>
  :local(a) {
    @apply hover:underline;
  }
  :local(.card) {
    @apply flex flex-col md:flex-row-reverse justify-center md:justify-between p-10;
  }
  :local(.card-social) {
    @apply flex flex-col p-10;
  }
  :local(.card-social) :local(div) {
    @apply flex flex-col md:flex-row justify-around;
  }
  :local(.card-social) :local(a) {
    @apply hover:text-primary-light dark:hover:text-primary-lightest;
  }
  :local(.card-social) :local(svg) {
    @apply h-20 w-20;
  }
  :local(svg) {
    @apply h-20 w-20;
  }
  :local(h2) {
    @apply text-3xl font-semibold;
  }
  :local(p) {
    @apply mt-2;
  }
</style>
