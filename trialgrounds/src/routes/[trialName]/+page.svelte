<script lang="ts">
  import { page } from '$app/stores';
  import { onMount, tick } from 'svelte';
  import Matcher from '../../components/Matcher.svelte';
  import { trialsByName } from '../../lib/trials';
  import type { TrialName } from '../../lib/trialNames';

  $: trial = trialsByName.get($page.params.trialName as TrialName)!;
  $: showUntransformedRect = $page.url.searchParams.get('showUntransformedRect') === 'true';
  $: showUntransformedContainers =
    $page.url.searchParams.get('showUntransformedContainers') === 'true';

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
  <Matcher element={trial.trialComponent?.getTrialElement()} trialName={trial.name} />
  {#if showUntransformedRect}
    <Matcher
      element={trial.trialComponent?.getTrialElement()}
      trialName={''}
      untransformed={true}
    />
  {/if}
  {#if showUntransformedContainers}
    {#each trial.trialComponent?.getContainers() ?? [] as container}
      <Matcher element={container} trialName={''} untransformed={true} />
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
