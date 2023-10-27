<script lang="ts">
  import { page } from '$app/stores';
  import { onMount, tick } from 'svelte';
  import Matcher from '../../components/Matcher.svelte';
  import { trialsByName } from '../../lib/trials';
  import type { TrialName } from '../../lib/trialNames';

  let matcher: Matcher;
  $: trial = trialsByName.get($page.params.trialName as TrialName)!;

  let matchInterval: NodeJS.Timeout | undefined = undefined;

  onMount(async () => {
    await tick();

    if (!trial?.trialComponent) {
      throw new Error('trial component failed to load');
    }

    matchTest();
    matchInterval = setInterval(matchTest, 300);
  });

  function matchTest(): void {
    matcher.match(trial.trialComponent!.getTrialElement(), trial.name);
  }
</script>

<div class="lone-trial-container">
  {#if trial}
    <svelte:component this={trial.trialType} bind:this={trial.trialComponent} />
  {/if}
</div>
<div class="matcher-container">
  <Matcher bind:this={matcher} />
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
