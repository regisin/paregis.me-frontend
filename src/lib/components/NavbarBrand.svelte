<script>
    export let link;
</script>

<div>
    <a href={link}>
        <span>
            <slot></slot>
        </span>
    </a>
</div>

<style lang="postcss" global>
    :local(div) {
        @apply flex items-center flex-shrink-0 content-center border-0 mr-6 px-4
                /* light theme colors */
                bg-primary-darkest
    }
    :local(a) {
        @apply no-underline hover:no-underline m-auto;
    }
    :local(span) {
        @apply text-2xl;
    }
</style>