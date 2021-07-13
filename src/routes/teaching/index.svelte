<script context="module">
	export async function load({ fetch, page }) {
		const res = await fetch(`https://paregisme.herokuapp.com/teaching`);
        const page_content = await res.json();
		return { props: { page_content, page } };
	}
</script>

<script>
    import SvelteSeo from "svelte-seo";
    import marked from "marked";
    import PageTitle from '$lib/components/PageTitle.svelte';
    export let page;
    export let page_content;

    const host = page.host;
    const path = page.path;
</script>

<SvelteSeo
	title="Teaching | {host}"
	description="{page_content.description}" 
	canonical="https://{host}{path}"
/>

<PageTitle title="Teaching" />


<article>
    {@html marked(page_content.content) }
</article>

<h2>Souhtheastern Louisiana University</h2>
<ul>
    <li>Algorithm Design and Implementation II (CMPS 280) <code>Spring 2020, Summer 2020, Fall 2020, Spring 2021</code></li>
    <li>IoT for Data Science (CMPS 691) <code>Spring 2021</code></li>
    <li>Special Topics in Information Technology (CMPS 494/594) <code>Spring 2020</code></li>
    <li>Advanced Computer Networks (CMPS 409) <code>Fall 2019</code></li>
    <li>Introduction to Applied Networking (CMPS 209) <code>Fall 2019</code></li>
    <li>Algorithm Design and Implementation I (CMPS 161) <code>Fall 2019</code></li>
</ul>

<h2>University of Nevada, Reno</h2>
<ul>
    <li>Computer Communication Networks (CPE 400/600) Spring 2019</li>
</ul>

<h3>Teaching assistant</h3>
<ul>
    <li>Introduction to Engineering Design (ENGR 100) Fall 2017, Fall 2018</li>
    <li>Computer Communication Networks (CPE 400/600) Fall 2017, Fall 2018</li>
</ul>


<h3>Research Experience Mentor</h3>
<ul>
    <li>RET: Cyber Security Initiative for Nevada Teachers Summer 2017, Summer 2018</li>
    <li>REU: Collaborative Human-Robot Interaction Summer 2018</li>
</ul>



<style lang="postcss" global>
    :local(h1) {
		@apply font-bold break-normal pt-6 pb-2 text-3xl md:text-4xl;
	}
	:local(h2) {
		@apply font-bold break-normal pt-6 pb-2 text-xl md:text-2xl;
	}
    :local(h3) {
		@apply font-bold break-normal pt-6 pb-2 text-lg md:text-xl;
	}
</style>