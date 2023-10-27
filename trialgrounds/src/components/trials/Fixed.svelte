<script lang="ts">
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.Fixed;

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
  .fixed {
    position: fixed;
    right: 1em;
    top: 1em;
  }
</style>
