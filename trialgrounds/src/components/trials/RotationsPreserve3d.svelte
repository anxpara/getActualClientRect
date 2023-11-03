<script lang="ts">
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.RotationsPreserve3d;

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
  <div bind:this={trialElement} class="trial-element {trialName}">
    {trialName}
  </div>
</div>

<style lang="scss">
  .rotations-preserve-3d-container {
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transform: rotateX(10deg) rotateZ(10deg);

    .rotations-preserve-3d {
      transform: rotateX(40deg) rotateZ(35deg);
    }
  }
</style>
