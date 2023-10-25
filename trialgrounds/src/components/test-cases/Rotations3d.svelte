<script lang="ts">
  import { TestName } from '../../lib/testNames';

  let testName = TestName.Rotations3d;

  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }
</script>

<div class="test-container {testName}-container">
  <div bind:this={testElement} class="test-element {testName}">{testName}</div>
</div>

<style lang="scss">
  .rotations-3d-container {
    transform: rotateX(10deg) rotateZ(10deg);

    .two-rotations {
      transform: rotateX(40deg) rotateZ(35deg);
    }
  }
</style>
