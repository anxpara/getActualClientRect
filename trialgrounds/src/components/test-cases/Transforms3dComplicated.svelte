<script lang="ts">
  import { TestName } from '../../lib/testNames';

  let testName = TestName.Transforms3dComplicated;

  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }
</script>

<div class="test-container {testName}-container">
  <div bind:this={testElement} class="test-element {testName}">{testName}</div>
</div>

<style lang="scss">
  .transforms-3d-complicated-container {
    transform: skewX(10deg) translate(1em, 1em) rotateX(10deg) rotateZ(10deg);

    .transforms-3d-complicated {
      transform: skewX(10deg) translate(1em, 1em) rotateX(10deg) rotateZ(10deg);
    }
  }
</style>
