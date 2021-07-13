<script>
    let request;
    let response;

    function sendRequest() {
        $response="abc";
    }
</script>

<div>
<h2>Resquest</h2>
{request}
</div>

<button on:click="{sendRequest}"></button>

<div>
<h2>Response</h2>
{$response}
</div>