<script lang="ts">
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.Rotated;

  let trialElement: HTMLElement;
  export function getTrialElement(): HTMLElement {
    return trialElement;
  }

  export function getContainers(): HTMLElement[] {
    return [];
  }
</script>

<div bind:this={trialElement} class="trial-element {trialName}">{trialName}</div>

<style lang="scss">
  .rotated {
    transform: rotate(45deg);
  }
</style>
