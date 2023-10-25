<script lang="ts">
  import { TestName } from '../../lib/testNames';

  let testName = TestName.Absolute;

  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }
</script>

<div class="test-container {testName}">
  <div bind:this={testElement} class="test-element {testName}">{testName}</div>
</div>

<style lang="scss">
  .test-container.absolute {
    position: relative;

    .absolute {
      position: absolute;
      right: 1em;
      bottom: 1em;
    }
  }
</style>
