<script lang="ts">
  import { allTrials, getTrials, type Trial } from '../lib/trials';
  import Matcher from '../components/Matcher.svelte';
  import { onMount, tick } from 'svelte';
  import { page } from '$app/stores';

  export let data;
  $: matchOnce = data.matchOnce;

  const trials = getCurrentTrials(data.trialNames);
  function getCurrentTrials(trialNames: string[]): Trial[] {
    return trialNames.length ? getTrials(trialNames) : allTrials;
  }

  let trialsLoaded = false;

  onMount(async () => {
    await tick();
    trialsLoaded = true;
  });
</script>

<div class="all-trials-container">
  {#each trials as trial}
    <a href="/{trial.name}{$page.url.search}">
      <svelte:component this={trial.trialType} bind:this={trial.trialComponent} {trial} />
    </a>
  {/each}
</div>

<div class="matcher-container">
  {#if trialsLoaded}
    {#each trials as trial}
      <a href="/{trial.name}{$page.url.search}">
        <Matcher element={trial.trialComponent?.getTrialElement()} {trial} {matchOnce} />
      </a>
      {#if data.showUntransformedRect}
        <Matcher
          element={trial.trialComponent?.getTrialElement()}
          trial={undefined}
          untransformed={true}
          {matchOnce}
        />
      {/if}
      {#if data.showUntransformedContainers}
        {#each trial.trialComponent?.getContainers() ?? [] as container}
          <Matcher element={container} trial={undefined} untransformed={true} {matchOnce} />
        {/each}
      {/if}
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
