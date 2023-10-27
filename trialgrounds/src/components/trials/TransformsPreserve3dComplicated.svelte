<script lang="ts">
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.TransformsPreserve3dComplicated;

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
  .transforms-preserve-3d-complicated-container {
    transform: rotateX(10deg) rotateZ(10deg);

    .transforms-preserve-3d-complicated {
      transform: rotateX(40deg) rotateZ(35deg);
    }
  }
</style>
