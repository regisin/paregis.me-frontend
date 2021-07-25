<script>
  import { onDestroy, onMount } from "svelte";

  let plotlyRef = undefined;
  let plotDiv;
  let plot = undefined;

  export let data;
  export let layout;
  export let config;

  onMount(() => {
    let script = document.createElement('script');
    script.src = "../js/plotly-2.2.0.min.js"
    document.head.append(script);
    script.onload = function() {
      plotlyRef = Plotly;
      plot = plotlyRef.newPlot(plotDiv, data, layout, config);
    };
  });

  onDestroy(() => {
    if (plotlyRef) plotlyRef.purge(plotDiv);
  });

  $: {
        if (plot) {
          const xmin = data[0].x[0];
          const xmax = data[0].x[data[0].x.length - 1];
          layout.rangeslider = {range: [xmin, xmax]},
          plotlyRef.react(plotDiv, data, layout, config);
        }
      }
</script>

<div bind:this={plotDiv} />
