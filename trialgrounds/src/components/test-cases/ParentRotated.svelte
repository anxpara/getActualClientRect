<script lang="ts">
  import { TestName } from '../../lib/testNames';

  let testName = TestName.ParentRotated;

  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }
</script>

<div class="test-container {testName}-container">
  <div bind:this={testElement} class="test-element {testName}">{testName}</div>
</div>

<style lang="scss">
  .parent-rotated-container {
    transform: rotate(15deg);
  }
</style>
