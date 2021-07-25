<script context="module">
	export async function load({ page }) {
		return { props: { page } };
	}
</script>






<script>
    import SvelteSeo from "svelte-seo";
    import PageTitle from '$lib/components/PageTitle.svelte';
    import Plot from "$lib/components/Plot.svelte";

    export let page;

    const host = page.host;
    const path = page.path;

    let symbol = "";

    let data = [
                {x: [new Date(0)], y: [0]},
                {x: [new Date(0)], y: [0]},
                {x: [new Date(0)], y: [0]},
                {x: [new Date(0)], y: [0]},
                {x: [new Date(0)], y: [0]}
            ];
    let layout = {
        title: {
            text:'Title',

        },
        xaxis: {
            type: 'date',
            autorange: true,
            rangeselector: {
                buttons: [
                    {
                        count: 1,
                        label: '1m',
                        step: 'month',
                        stepmode: 'backward'
                    },
                    {
                        count: 6,
                        label: '6m',
                        step: 'month',
                        stepmode: 'backward'
                    },
                    {step: 'all'}
                ]
            },
        },
        yaxis: {
            title: 'Adjusted close',
            titlefont: {
                family: 'Courier New, monospace',
                size: 18,
                color: '#7f7f7f'
            },
            type: 'scatter',
            autorange: true,
        },
        showlegend: true,
        legend: {
            x: 1,
            y: 1.2,
            xanchor: 'right',
            orientation: "h",
        }

    };
    let config = {responsive: true, scrollZoom: true};

    async function prophetize(symbol) {
        layout.showlegend = true;
        layout.title.text = `Historical and trend price for ${symbol}`;
        const res = await fetch(`../a-${symbol}.json`);
        const raw = await res.json();

        const x = Object.values(raw.ds).map(d => new Date(d));

        return [
            {
                x,
                y: Object.values(raw.yhat),
                type: 'scatter',
                name: 'Y hat',
                mode: 'lines',
                line: {
                    color: 'rgb(24, 123, 205)',
                    width: 2
                }
            },
            {
                x,
                y: Object.values(raw.yhat_upper),
                type: 'scatter',
                name: 'Upper',
                mode: 'lines',
                line: {
                    color: 'rgb(24, 123, 205)',
                    width: 1
                },
                showlegend: false,
            },
            {
                x,
                y: Object.values(raw.yhat_lower),
                type: 'scatter',
                name: 'AREA',
                mode: 'lines',
                line: {width: 0},
                showlegend: false,
                fill: 'tonexty',
                fillcolor: 'rgba(24, 123, 205, 0.2)'
            },
            {
                x,
                y: Object.values(raw.yhat_lower),
                type: 'scatter',
                name: 'Lower',
                mode: 'lines',
                line: {
                    color: 'rgb(24, 123, 205)',
                    width: 1
                },
                showlegend: false,
            },
            {
                x,
                y: Object.values(raw.y),
                type: 'scatter',
                name: 'Close',
                mode: 'markers',
                marker: {
                    color: 'black',
                    size: 2
                },
            },
        ]
    }

    let state = "";
    async function handleClick() {
        state = "loading";
        data = await prophetize(symbol);
        state = "";
    }
</script>

<SvelteSeo
	title="Prophetize | {host}"
	description="Using Prophet library to predict stock prices usinmg a backend API." 
	canonical="https://{host}{path}"
/>

<PageTitle title="Prophetize" />

<label for="symbol">Ticker symbol: </label>
<input type="text" name="symbol" bind:value="{symbol}" />
<button on:click|preventDefault="{handleClick}">Prophetize</button>

<span>{state}</span>

<Plot {data} {layout} {config}/>    

