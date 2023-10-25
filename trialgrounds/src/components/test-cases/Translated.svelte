<script lang="ts">
  import { TestName } from '../../lib/testNames';

  let testName = TestName.Translated;

  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }
</script>

<div bind:this={testElement} class="test-element {testName}">{testName}</div>

<style lang="scss">
  .translated {
    transform: translate(1em, 1em);
  }
</style>
