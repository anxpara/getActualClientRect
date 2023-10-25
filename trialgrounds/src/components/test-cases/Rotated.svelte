<script lang="ts">
  import { TestName } from '../../lib/testNames';

  let testName = TestName.Rotated;

  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }
</script>

<div bind:this={testElement} class="test-element {testName}">{testName}</div>

<style lang="scss">
  .rotated {
    transform: rotate(45deg);
  }
</style>
