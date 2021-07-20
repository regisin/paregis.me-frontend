<script context="module">
    import { dev } from "$app/env";

    export async function load({ page }) {
        const path = page.path;
        return {
            props:{
                segment: path
            }
        }
    }
</script>

<script>
    import { dark } from '$lib/components/store/global.js';

    import SvelteCsp from "$lib/components/SvelteCsp.svelte";

    import LightBulb from "$lib/components/LightBulb.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import NavbarBrand from "$lib/components/NavbarBrand.svelte";
    import NavbarLinkContainer from "$lib/components/NavbarLinkContainer.svelte";
    import NavbarLink from "$lib/components/NavbarLink.svelte";
    import Footer from "$lib/components/Footer.svelte";

    import "../app.postcss";
    export let segment;
</script>

<SvelteCsp
    defaultSrc={["'self'"]}
    imgSrc={["'self'", "res.cloudinary.com"]}
    styleSrc={["'self'", "'unsafe-inline'"]}
    scriptSrc={["'self'", "'unsafe-inline'"]}
    connectSrc={["'self'", "paregisme.herokuapp.com"]}
    devMode={dev}
/>

<div class="theme" class:dark={$dark}>
    <header>
        <Navbar>
            <LightBulb/>
            <NavbarBrand link="/">paregis.me</NavbarBrand>
            <NavbarLinkContainer>
                <NavbarLink {segment} link='/about'>About</NavbarLink>
                <NavbarLink {segment} link='/teaching'>Teaching</NavbarLink>
                <NavbarLink {segment} link='/publications'>Publications</NavbarLink>
                <NavbarLink {segment} link='/contact'>Contact</NavbarLink>
            </NavbarLinkContainer>
        </Navbar>
    </header>
    <main>
        <!--Container-->
        <div>
            <slot></slot>
        </div>
    </main>
    <Footer />
    
</div>


<style lang="postcss" global>
    :local(.theme) {
        @apply flex flex-col min-h-screen;
    }
    :local(main) {
        @apply flex-grow overflow-auto
                /* light theme colors */
                bg-primary-lightest text-primary
                /* dark theme colors */
                dark:bg-primary-dark dark:text-primary-light
        ;
    }
    :local(main) :local(div) {
        @apply container mx-auto py-14 md:pt-32 md:max-w-3xl;
    }
</style>