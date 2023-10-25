<script lang="ts">
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.TwoRotations;

  let trialElement: HTMLElement;
  export function getTrialElement(): HTMLElement {
    return trialElement;
  }
</script>

<div class="trial-container {trialName}-container">
  <div bind:this={trialElement} class="trial-element {trialName}">{trialName}</div>
</div>

<style lang="scss">
  .two-rotations-container {
    transform: rotate(15deg);

    .two-rotations {
      transform: rotate(15deg);
    }
  }
</style>
