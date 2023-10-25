<script lang="ts">
  import { TestName } from '../../lib/testNames';

  let testName = TestName.Control;

  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }
</script>

<div bind:this={testElement} class="test-element {testName}">{testName}</div>
