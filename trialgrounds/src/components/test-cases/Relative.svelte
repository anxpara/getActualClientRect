<script lang="ts">
  import { TestName } from '../../lib/testNames';

  let testName = TestName.Relative;

  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }
</script>

<div bind:this={testElement} class="test-element {testName}">{testName}</div>

<style lang="scss">
  .relative {
    position: relative;
    top: 1em;
    left: 1em;
  }
</style>
