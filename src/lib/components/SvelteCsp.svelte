<script>
    /**
     * Useful links:
     * - https://content-security-policy.com/
     * - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
     * - https://developers.google.com/web/fundamentals/security/csp
     * - https://www.w3.org/TR/CSP3/
     * 
     */
    /* Starter policy */
    // default-src 'none'
    // script-src 'self'
    // connect-src 'self'
    // img-src 'self'
    // style-src 'self'
    // base-uri 'self'
    // form-action 'self'

    export let defaultSrc = ["'none'"];
    export let scriptSrc = ["'self'"];
    export let styleSrc = ["'self'"];
    export let imgSrc = ["'self'"];
    export let connectSrc = ["'self'"];
    /**
     * In dev mode, need localhost websockets for hmr
     */
    export let devMode = true;
    if (devMode) {
        connectSrc = [...connectSrc, "ws://localhost:*/"];
    }
    export let fontSrc = undefined;
    export let objectSrc = undefined;
    export let mediaSrc = undefined;
    export let frameSrc = undefined;
    // export let sandbox = undefined;
    // export let reportUri = undefined;
    export let childSrc = undefined;
    export let formAction = ["'self'"];
    // export let frameAncestors = undefined;
    export let pluginTypes = undefined;
    export let baseUri = ["'self'"];
    export let reportTo = undefined;
    export let workerSrc = undefined;
    export let manifestSrc = undefined;
    export let prefetchSrc = undefined;
    export let navigateTo = undefined;

    let content = "";

    function addOrigin(csp, directive, sources) {
        if (csp !== "") {
            csp += "; "
        }
        csp += directive;
        for (let index = 0; index < sources.length; index++) {
            const element = sources[index];
            csp += " " + element;
        }
        return csp;
    }

    if (defaultSrc) {
        content = addOrigin(content, 'default-src', defaultSrc);
    }
    if (scriptSrc) {
        content = addOrigin(content, 'script-src', scriptSrc);
    }
    if (styleSrc) {
        content = addOrigin(content, 'style-src', styleSrc);
    }
    if (imgSrc) {
        content = addOrigin(content, 'img-src', imgSrc);
    }
    if (connectSrc) {
        content = addOrigin(content, 'connect-src', connectSrc);
    }
    if (fontSrc) {
        content = addOrigin(content, 'font-src', fontSrc);
    }
    if (objectSrc) {
        content = addOrigin(content, 'object-src', objectSrc);
    }
    if (mediaSrc) {
        content = addOrigin(content, 'media-src', mediaSrc);
    }
    if (frameSrc) {
        content = addOrigin(content, 'frame-src', frameSrc);
    }
    /* NOT supported */
    // if (sandbox) {
    //     content = addOrigin(content, 'sandbox', sandbox);
    // }
    /* NOT supported */
    // if (reportUri) {
    //     content = addOrigin(content, 'report-uri', reportUri);
    // }
    if (childSrc) {
        content = addOrigin(content, 'child-src', childSrc);
    }
    if (formAction) {
        content = addOrigin(content, 'form-action', formAction);
    }
    /* NOT supported */
    // if (frameAncestors) {
    //     content = addOrigin(content, 'frame-ancestors', frameAncestors);
    // }
    if (pluginTypes) {
        content = addOrigin(content, 'plugin-types', pluginTypes);
    }
    if (baseUri) {
        content = addOrigin(content, 'base-uri', baseUri);
    }
    if (reportTo) {
        content = addOrigin(content, 'report-to', reportTo);
    }
    if (workerSrc) {
        content = addOrigin(content, 'worker-src', workerSrc);
    }
    if (manifestSrc) {
        content = addOrigin(content, 'manifest-src', manifestSrc);
    }
    if (prefetchSrc) {
        content = addOrigin(content, 'prefetch-src', prefetchSrc);
    }
    if (navigateTo) {
        content = addOrigin(content, 'navigate-to', navigateTo);
    }

    content = "<meta http-equiv=\"Content-Security-Policy\" content=\"" + content + "\">";
</script>

<svelte:head>
    {@html content}
</svelte:head>