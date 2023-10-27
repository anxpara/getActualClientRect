<script lang="ts">
  import { allTrials } from '../lib/trials';
  import Matcher from '../components/Matcher.svelte';
  import { onMount, tick } from 'svelte';

  let trialsLoaded = false;

  onMount(async () => {
    await tick();
    trialsLoaded = true;
  });
</script>

<div class="all-trials-container">
  {#each allTrials as trial}
    <a href="/{trial.name}">
      <svelte:component this={trial.trialType} bind:this={trial.trialComponent} />
    </a>
  {/each}
</div>

<div class="matcher-container">
  {#if trialsLoaded}
    {#each allTrials as trial}
      <a href="/{trial.name}">
        <Matcher element={trial.trialComponent?.getTrialElement()} trialName={trial.name} />
      </a>
    {/each}
  {/if}
</div>

<style lang="scss">
  a {
    width: fit-content;
    height: fit-content;
    text-decoration: none;
  }

  .all-trials-container {
    position: absolute;
    top: 14em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2em;
  }

  .matcher-container {
    position: fixed;
  }
</style>
