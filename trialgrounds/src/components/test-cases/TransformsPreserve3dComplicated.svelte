<script lang="ts">
  import { TestName } from '../../lib/testNames';

  let testName = TestName.TransformsPreserve3dComplicated;

  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }
</script>

<div class="test-container {testName}-container">
  <div bind:this={testElement} class="test-element {testName}">{testName}</div>
</div>

<style lang="scss">
  .transforms-preserve-3d-complicated-container {
    transform: rotateX(10deg) rotateZ(10deg);

    .transforms-preserve-3d-complicated {
      transform: rotateX(40deg) rotateZ(35deg);
    }
  }
</style>
