<script lang="ts">
  import { onMount } from 'svelte';
  import { TestName } from '../../lib/testNames';

  let testName = TestName.Scroll;

  let scroller: HTMLElement;
  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }

  onMount(() => {
    scroller.scrollTop = 70;
    scroller.scrollLeft = 50;
  });
</script>

<div bind:this={scroller} class="test-container {testName}-container">
  <div class="filler">
    <div bind:this={testElement} class="test-element {testName}">{testName}</div>
  </div>
</div>

<style lang="scss">
  .scroll-container {
    overflow: scroll;

    .filler {
      width: 20em;
      height: 20em;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
