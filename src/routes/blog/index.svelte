<script context="module">
    export async function load({ page }) {
        const path = page.path;
        const url = "/";
        console.log(url);
            return {
                status: 301,
                redirect: url,
            };
    }
</script>

<p>You are being redirected home /.</p>