<script lang="ts">
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.PaddedParentRotated;

  let trialElement: HTMLElement;
  export function getTrialElement(): HTMLElement {
    return trialElement;
  }
</script>

<div class="trial-container {trialName}-container">
  <div bind:this={trialElement} class="trial-element {trialName}">{trialName}</div>
</div>

<style lang="scss">
  .padded-parent-rotated-container {
    padding: 1em;
    transform: rotate(15deg);
  }
</style>
