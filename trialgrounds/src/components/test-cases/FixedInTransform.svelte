<script lang="ts">
  import { TestName } from '../../lib/testNames';

  let testName = TestName.FixedInTransform;

  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }
</script>

<div class="test-container {testName}-container">
  <div bind:this={testElement} class="test-element {testName}">{testName}</div>
</div>

<style lang="scss">
  .fixed-in-transform-container {
    transform: rotate(15deg);

    .fixed-in-transform {
      position: fixed;
      right: 1em;
      top: 1em;
    }
  }
</style>
