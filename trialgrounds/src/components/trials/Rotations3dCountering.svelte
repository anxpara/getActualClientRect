<script lang="ts">
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.Rotations3dCountering;

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
  .rotations-3d-countering-container {
    width: fit-content;
    height: fit-content;
    transform: rotateY(45deg);

    .rotations-3d-countering {
      transform: rotateY(-45deg);
    }
  }
</style>
