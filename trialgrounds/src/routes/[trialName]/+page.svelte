<script lang="ts">
  import { page } from '$app/stores';
  import { getContext, onMount, tick } from 'svelte';
  import Matcher from '../../components/Matcher.svelte';
  import { trialsByName } from '$lib/trials/trials';
  import type { TrialName } from '$lib/trials/trialNames';
  import type { Writable } from 'svelte/store';
  import type { Options } from '$lib/options';

  export let data;

  const options = getContext<Writable<Options>>('options');
  $: matchOnce = $options.matchOnce;

  $: trial = trialsByName.get($page.params.trialName as TrialName)!;

  let trialLoaded = false;

  onMount(async () => {
    await tick();
    trialLoaded = true;

    if (!trial?.trialComponent) {
      throw new Error('trial component failed to load');
    }
  });
</script>

<div class="lone-trial-container">
  {#if trial}
    <svelte:component this={trial.trialType} bind:this={trial.trialComponent} {trial} />
  {/if}
</div>
{#if trialLoaded}
  <div class="matcher-container">
    <Matcher element={trial.trialComponent?.getTrialElement()} {trial} {matchOnce} />
    {#if $options.showBasis}
      <Matcher
        element={trial.trialComponent?.getTrialElement()}
        trial={undefined}
        {matchOnce}
        isBasis={true}
      />
      {#each trial.trialComponent?.getContainers() ?? [] as container}
        <Matcher
          element={container}
          trial={undefined}
          {matchOnce}
          isBasis={true}
          isContainer={true}
        />
      {/each}
    {/if}
  </div>
{/if}

<style lang="scss">
  .lone-trial-container {
    position: absolute;
    top: 0;

    width: 100%;
    height: 100svh;

    display: grid;
    justify-content: center;
    align-items: center;
  }
</style>
