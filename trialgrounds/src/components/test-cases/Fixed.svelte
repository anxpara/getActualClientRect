<script lang="ts">
  import { TestName } from '../../lib/testNames';

  let testName = TestName.Fixed;

  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }
</script>

<div bind:this={testElement} class="test-element {testName}">{testName}</div>

<style lang="scss">
  .fixed {
    position: fixed;
    right: 1em;
    top: 1em;
  }
</style>
