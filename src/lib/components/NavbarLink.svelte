<script>
    export let segment;
    export let link;
</script>
<li>
    <a class:active={segment === link} href="{link}">
        <slot></slot>
    </a>
</li>

<style lang="postcss" global>
    :local(li) {
        @apply mr-3;
    }
    :local(a) {
        @apply inline-block no-underline pb-0 px-4 cursor-pointer
                /* light theme colors */
                text-white hover:text-primary-light 
                /* dark theme colors */
                dark:text-primary-light dark:hover:text-primary-lightest
    }
    :local(.active) {
        @apply lg:border-b lg:border-l-0 border-l border-b-0 pt-0
    }
</style>