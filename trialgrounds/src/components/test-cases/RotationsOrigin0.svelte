<script lang="ts">
  import { TestName } from '../../lib/testNames';

  let testName = TestName.RotationsOrigin0;

  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }
</script>

<div class="test-container {testName}-container">
  <div bind:this={testElement} class="test-element {testName}">
    {testName}
  </div>
</div>

<style lang="scss">
  .rotations-origin-0-container {
    transform-origin: top left;
    transform: rotate(15deg);

    .rotations-origin-0 {
      transform-origin: top left;
      transform: rotate(15deg);
    }
  }
</style>
