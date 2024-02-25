<script lang="ts">
  import type { ACROptions } from 'actual-client-rect';
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.RotationOrigin0UseCenter;

  let trialElement: HTMLElement;
  export function getTrialElement(): HTMLElement {
    return trialElement;
  }

  export function getContainers(): HTMLElement[] {
    return [];
  }

  export function getACROptions(): ACROptions {
    return {
      useTransformOrigin: 'center',
    };
  }
</script>

<div bind:this={trialElement} class="trial-element {trialName}">
  {trialName}
</div>

<style lang="scss">
  .rotation-origin-0-use-center {
    transform-origin: top left;
    transform: rotate(15deg);
  }
</style>
