<script>
  export let data;
</script>

<div>
  {#await data.streams.leaderboard}
    <span class="loading loading-spinner loading-sm" />
  {:then leaderboard}
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Streak</th>
          </tr>
        </thead>
        <tbody>
          {#each leaderboard as player, index}
            <tr>
              <th>{index + 1}</th>
              <td>{player.name}</td>
              <td>{player.streak}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/await}
</div>
