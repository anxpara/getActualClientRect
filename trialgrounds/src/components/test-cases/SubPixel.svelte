<script lang="ts">
  import { TestName } from '../../lib/testNames';

  let testName = TestName.SubPixel;

  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }
</script>

<div class="test-container {testName}-container">
  <div bind:this={testElement} class="test-element {testName}">{testName}</div>
</div>

<style lang="scss">
  .sub-pixel-container {
    position: fixed;
    top: 10.2px;
    left: 10.2px;

    .sub-pixel {
      position: absolute;
      top: 10.4px;
      left: 10.4px;

      width: 160.757575757px;
      height: 128.123456789px;
    }
  }
</style>
