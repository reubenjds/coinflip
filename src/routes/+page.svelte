<script lang="ts">
  function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

  let selectedFlip: number;
  let flip = -1;
  let streak = 0;
  function flipCoin() {
    flip = getRandomInt(2);

    if (selectedFlip === flip) {
      streak++;
    }
    
  }

  function reset() {
    flip = -1;
    streak = 0;
  }

</script>

<div class="flex flex-col text-lg justify-center place-items-center min-h-screen gap-5"> 
  {#if flip === -1}
  <select bind:value={selectedFlip} class="select select-secondary w-full max-w-xs">
    <option value={1} selected>heads</option>
    <option value={0}>tails</option>
  </select>
  {:else if flip === 1}
      <h2 class="text-orange-600" >heads</h2>
  {:else} 
      <h2 class="text-cyan-400">tails</h2>
  {/if}

<button disabled={selectedFlip !== flip && flip !== -1} class="btn btn-success" on:click={flipCoin}>Flip Coin</button>
{#if streak !== 0}
<h1> Your streak is <span class="text-2xl font-bold text-yellow-400">{streak}</span></h1>
{/if}

{#if selectedFlip !== flip && flip !== -1}
<button on:click={reset} class="btn btn-info">Play Again!</button>
{/if}
</div>


