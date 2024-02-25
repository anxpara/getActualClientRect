<script lang="ts">
  import { page } from '$app/stores';
  import { onMount, tick } from 'svelte';
  import Matcher from '../../components/Matcher.svelte';
  import { trialsByName } from '../../lib/trials';
  import type { TrialName } from '../../lib/trialNames';

  export let data;
  $: matchOnce = data.matchOnce;

  $: trial = trialsByName.get($page.params.trialName as TrialName)!;

  onMount(async () => {
    await tick();

    if (!trial?.trialComponent) {
      throw new Error('trial component failed to load');
    }
  });
</script>

<div class="lone-trial-container">
  {#if trial}
    <svelte:component this={trial.trialType} bind:this={trial.trialComponent} />
  {/if}
</div>
<div class="matcher-container">
  <Matcher element={trial.trialComponent?.getTrialElement()} {trial} {matchOnce} />
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
</div>

<style lang="scss">
  .lone-trial-container {
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
  }
</style>
