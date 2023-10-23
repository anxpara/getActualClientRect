<script lang="ts">
  import { TestName } from '../../lib/testNames';

  let testElement: HTMLElement;
  export function getTestElement(): HTMLElement {
    return testElement;
  }
</script>

<div bind:this={testElement} class="test-element control">{TestName.Control}</div>
