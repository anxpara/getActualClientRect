<script lang="ts">
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.Rotations3d;

  let trialElement: HTMLElement;
  export function getTrialElement(): HTMLElement {
    return trialElement;
  }
</script>

<div class="trial-container {trialName}-container">
  <div bind:this={trialElement} class="trial-element {trialName}">{trialName}</div>
</div>

<style lang="scss">
  .rotations-3d-container {
    transform: rotateX(10deg) rotateZ(10deg);

    .two-rotations {
      transform: rotateX(40deg) rotateZ(35deg);
    }
  }
</style>
