<script>
    let hidden = true;
</script>

<div class="div1">
    <button on:click="{() => hidden = !hidden}">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
    </button>
</div>

<div class="div2" class:hidden>
    <ul>
        <slot></slot>
    </ul>
</div>

<style lang="postcss" global>
    :local(.div1) {
        @apply block lg:hidden;
    }
    :local(button) {
        @apply flex items-center px-3 py-2 border rounded
                hover:text-primary-light
                hover:border-primary-light
                /* light theme colors */
                text-white border-white
                /* dark theme colors */
                text-primary-lightest border-primary-lightest
                ;
    }
    :local(svg) {
        @apply fill-current h-3 w-3;
    }
    :local(.div2) {
        @apply w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0;
    }
    :local(ul) {
        @apply  lg:flex justify-end flex-1 items-center px-5;
    }
</style>