<script lang="ts">
  import { TestName } from '../../data/testNames';

  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }
</script>

<div class="test-container two-rotations">
  <div bind:this={testElement} class="test-element two-rotations">{TestName.TwoRotations}</div>
</div>

<style lang="scss">
  .test-container.two-rotations {
    transform: rotate(15deg);

    .two-rotations {
      transform: rotate(15deg);
    }
  }
</style>
