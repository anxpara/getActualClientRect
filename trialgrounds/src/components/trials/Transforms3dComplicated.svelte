<script lang="ts">
  import type { ACROptions } from 'actual-client-rect';
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.Transforms3dComplicated;

  let trialElement: HTMLElement;
  export function getTrialElement(): HTMLElement {
    return trialElement;
  }

  let container: HTMLElement;
  export function getContainers(): HTMLElement[] {
    return [container];
  }

  export function getACROptions(): ACROptions {
    return {};
  }
</script>

<div bind:this={container} class="trial-container {trialName}-container">
  <div bind:this={trialElement} class="trial-element {trialName}">{trialName}</div>
</div>

<style lang="scss">
  .transforms-3d-complicated-container {
    transform: skewX(10deg) translate(1em, 1em) rotateX(10deg) rotateZ(10deg);

    .transforms-3d-complicated {
      transform: skewX(10deg) translate(1em, 1em) rotateX(10deg) rotateZ(10deg);
    }
  }
</style>
