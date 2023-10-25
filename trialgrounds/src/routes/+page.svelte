<script lang="ts">
  import { onDestroy, onMount, tick } from 'svelte';
  import { allTrials } from '../lib/trials';
  import Matcher from '../components/Matcher.svelte';

  let matchInterval: NodeJS.Timeout | undefined = undefined;

  onMount(async () => {
    window.scrollTo(0, 0);
    await tick();
    matchAllTests();
    matchInterval = setInterval(matchAllTests, 300);
  });

  onDestroy(() => {
    clearInterval(matchInterval);
  });

  function matchAllTests(): void {
    allTrials.forEach((trial) => {
      const el = trial.trialComponent?.getTrialElement();
      if (!el) {
        throw new Error('failed to get trial el from trial component');
      }
      const matcher = trial.matcher;
      if (!matcher) {
        throw new Error('failed to get matcher for trial component');
      }
      matcher.match(el, trial.name);
    });
  }
</script>

<div class="all-trials-container">
  {#each allTrials as trial}
    <svelte:component this={trial.trialType} bind:this={trial.trialComponent} />
  {/each}
</div>

<div class="matcher-container">
  {#each allTrials as trial}
    <Matcher bind:this={trial.matcher} />
  {/each}
</div>

<style lang="scss">
  .all-trials-container {
    position: absolute;
    top: 14em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2em;
  }
</style>
