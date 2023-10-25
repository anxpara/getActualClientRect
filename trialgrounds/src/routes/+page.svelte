<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { allTestCases } from '../lib/testCases';
  import Matcher from '../components/Matcher.svelte';

  onMount(async () => {
    window.scrollTo(0, 0);
    await tick();
    matchAllTests();
  });

  function matchAllTests(): void {
    allTestCases.forEach((test) => {
      const el = test.testComponent?.getTestElement();
      if (!el) {
        throw new Error('failed to get test el from test component');
      }
      const matcher = test.matcher;
      if (!matcher) {
        throw new Error('failed to get matcher for test component');
      }
      matcher.match(el, test.name);
    });
  }
</script>

<div class="all-tests-container">
  {#each allTestCases as test}
    <svelte:component this={test.testType} bind:this={test.testComponent} />
  {/each}
</div>

<div class="matcher-container">
  {#each allTestCases as test}
    <Matcher bind:this={test.matcher} />
  {/each}
</div>

<style lang="scss">
  .all-tests-container {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    height: 100svh;
    gap: 2em;
  }
</style>
