<script lang="ts">
  import { onMount } from 'svelte';
  import { TestName } from '../../lib/testNames';

  let testName = TestName.ScrollInRotate;

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

<div class="rotate-container">
  <div bind:this={scroller} class="test-container {testName}-container">
    <div class="filler">
      <div bind:this={testElement} class="test-element {testName}">{testName}</div>
    </div>
  </div>
</div>

<style lang="scss">
  .rotate-container {
    transform: rotate(15deg);

    .scroll-in-rotate-container {
      overflow: scroll;

      .filler {
        width: 20em;
        height: 20em;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
