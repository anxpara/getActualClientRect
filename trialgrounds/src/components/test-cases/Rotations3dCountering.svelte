<script lang="ts">
  import { TestName } from '../../lib/testNames';

  let testName = TestName.Rotations3dCountering;

  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }
</script>

<div class="test-container {testName}-container">
  <div bind:this={testElement} class="test-element {testName}">{testName}</div>
</div>

<style lang="scss">
  .rotations-3d-countering-container {
    transform: rotateY(45deg);

    .rotations-3d-countering {
      transform: rotateY(-45deg);
    }
  }
</style>
