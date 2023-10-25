<script lang="ts">
  import { TestName } from '../../lib/testNames';

  let testName = TestName.TwoRotations;

  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }
</script>

<div class="test-container {testName}-container">
  <div bind:this={testElement} class="test-element {testName}">{testName}</div>
</div>

<style lang="scss">
  .two-rotations-container {
    transform: rotate(15deg);

    .two-rotations {
      transform: rotate(15deg);
    }
  }
</style>
