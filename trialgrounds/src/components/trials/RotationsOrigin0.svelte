<script lang="ts">
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.RotationsOrigin0;

  let trialElement: HTMLElement;
  export function getTrialElement(): HTMLElement {
    return trialElement;
  }
</script>

<div class="trial-container {trialName}-container">
  <div bind:this={trialElement} class="trial-element {trialName}">
    {trialName}
  </div>
</div>

<style lang="scss">
  .rotations-origin-0-container {
    transform-origin: top left;
    transform: rotate(15deg);

    .rotations-origin-0 {
      transform-origin: top left;
      transform: rotate(15deg);
    }
  }
</style>
