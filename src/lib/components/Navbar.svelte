<nav>
    <slot></slot>
</nav>

<style lang="postcss" global>
    :local(nav) { 
        @apply flex items-center justify-between flex-wrap
                border-0 px-2 py-4 fixed w-full z-10 top-0
                /* light/dark theme colors */
                bg-primary-darkest text-white
                ;
    }
</style>