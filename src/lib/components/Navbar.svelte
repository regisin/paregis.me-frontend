<nav>
    <slot></slot>
</nav>

<style lang="postcss" global>
    :local(nav) { 
        @apply flex items-center justify-between flex-wrap
                border-0 px-2 py-4 w-full
                /* light/dark theme colors */
                bg-primary-darkest text-white
                ;
    }
</style>