<script context="module">
    export async function load({ url }) {
        const path = url.pathname;
        const home = "/";
        console.log(home, path);
        return {
            status: 301,
            redirect: home,
        };
    }
</script>

<p>You are being redirected home /.</p>