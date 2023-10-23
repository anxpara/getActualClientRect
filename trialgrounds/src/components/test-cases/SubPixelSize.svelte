<script lang="ts">
  import { TestName } from '../../data/testNames';

  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }
</script>

<div bind:this={testElement} class="test-element sub-pixel-size">{TestName.SubPixelSize}</div>

<style lang="scss">
  .sub-pixel-size {
    width: 160.757575757px;
    height: 128.123456789px;
  }
</style>
