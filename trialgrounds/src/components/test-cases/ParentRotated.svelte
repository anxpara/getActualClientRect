<script lang="ts">
  import { TestName } from '../../lib/testNames';

  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }
</script>

<div class="test-container parent-rotated">
  <div bind:this={testElement} class="test-element">{TestName.ParentRotated}</div>
</div>

<style lang="scss">
  .test-container.parent-rotated {
    transform: rotate(15deg);
  }
</style>
