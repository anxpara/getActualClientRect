<script lang="ts">
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.Relative;

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
  .relative {
    position: relative;
    top: 1em;
    left: 1em;
  }
</style>
