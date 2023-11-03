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
    transform: skewX(10deg) translate(1em, 1em) rotateX(10deg) rotateZ(10deg);
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;

    .transforms-preserve-3d-complicated {
      transform: skewX(10deg) translate(1em, 1em) rotateX(10deg) rotateZ(10deg);
    }
  }
</style>
