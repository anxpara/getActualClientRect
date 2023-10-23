<script lang="ts">
  import { TestName } from '../../data/testNames';

  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }
</script>

<div bind:this={testElement} class="test-element rotated">{TestName.Rotated}</div>

<style lang="scss">
  .rotated {
    transform: rotate(45deg);
  }
</style>
