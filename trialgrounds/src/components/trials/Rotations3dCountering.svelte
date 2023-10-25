<script lang="ts">
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.Rotations3dCountering;

  let trialElement: HTMLElement;
  export function getTrialElement(): HTMLElement {
    return trialElement;
  }
</script>

<div class="trial-container {trialName}-container">
  <div bind:this={trialElement} class="trial-element {trialName}">{trialName}</div>
</div>

<style lang="scss">
  .rotations-3d-countering-container {
    transform: rotateY(45deg);

    .rotations-3d-countering {
      transform: rotateY(-45deg);
    }
  }
</style>
