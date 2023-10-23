<script lang="ts">
  import { page } from '$app/stores';
  import { onMount, tick } from 'svelte';
  import Matcher from '../../components/Matcher.svelte';
  import { testCasesByName } from '../../data/testCases';
  import type { TestName } from '../../data/testNames';

  let matcher: Matcher;
  $: test = testCasesByName.get($page.params.testName as TestName)!;

  onMount(async () => {
    await tick();

    if (!test?.testComponent) {
      throw new Error('test component failed to load');
    }

    matcher.match(test.testComponent.getTestElement(), test.name);
  });
</script>

<div class="lone-test-container">
  {#if test}
    <svelte:component this={test.testType} bind:this={test.testComponent} />
  {/if}
</div>
<div class="matcher-container">
  <Matcher bind:this={matcher} />
</div>

<style lang="scss">
  .lone-test-container {
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
  }
</style>
