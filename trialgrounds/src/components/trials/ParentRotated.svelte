<script lang="ts">
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.ParentRotated;

  let trialElement: HTMLElement;
  export function getTrialElement(): HTMLElement {
    return trialElement;
  }

  let container: HTMLElement;
  export function getContainers(): HTMLElement[] {
    return [container];
  }
</script>

<div bind:this={container} class="trial-container {trialName}-container">
  <div bind:this={trialElement} class="trial-element {trialName}">{trialName}</div>
</div>

<style lang="scss">
  .parent-rotated-container {
    transform: rotate(15deg);
  }
</style>
