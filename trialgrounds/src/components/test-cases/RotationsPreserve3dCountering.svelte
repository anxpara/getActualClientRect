<script lang="ts">
  import { TestName } from '../../lib/testNames';

  let testName = TestName.RotationsPreserve3dCountering;

  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }
</script>

<div class="test-container {testName}-container">
  <div bind:this={testElement} class="test-element {testName}">{testName}</div>
</div>

<style lang="scss">
  .rotations-preserve-3d-countering-container {
    transform-style: preserve-3d;
    transform: rotateY(45deg);

    .rotations-preserve-3d-countering {
      transform: rotateY(-45deg);
    }
  }
</style>
