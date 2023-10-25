<script lang="ts">
  import { onMount } from 'svelte';
  import { TestName } from '../../lib/testNames';

  let testName = TestName.Sticky;

  let scroller: HTMLElement;
  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }

  onMount(() => {
    scroller.scrollTop = 150;
  });
</script>

<div bind:this={scroller} class="test-container {testName}-container">
  <div class="spacer" />
  <div bind:this={testElement} class="test-element {testName}">{testName}</div>
  <div class="spacer" />
</div>

<style lang="scss">
  .sticky-container {
    position: relative;
    overflow: scroll;
    outline: none;
    border: solid 1px purple;

    .spacer {
      width: 100px;
      height: 100px;
      border: solid 1px coral;
    }

    .sticky {
      position: sticky;
      top: 2px;
      left: 2px;
    }
  }
</style>
