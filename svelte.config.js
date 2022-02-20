// import adapter from '@sveltejs/adapter-netlify';
// import node from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte'],
    kit: {
        adapter: adapter(),
        // if you are not using the static adapter and
        // you don't want prerendering, remove this section
        prerender: {
            entries: ['*', '/sitemap.xml', '/rss.xml']
        },
	},
    preprocess: [
        preprocess({
            "postcss": true
    })]
};

export default config;
// Workaround until SvelteKit uses Vite 2.3.8 (and it's confirmed to fix the Tailwind JIT problem)
const mode = process.env.NODE_ENV;
const dev = mode === "development";
process.env.TAILWIND_MODE = dev ? "watch" : "build";
