<script lang="ts">
  import type { ACROptions } from 'actual-client-rect';
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.BorderedParentRotated;

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
  .bordered-parent-rotated-container {
    border: solid 1px purple;
    outline: none;
    border-left-width: 9px;
    border-top-width: 12px;
    border-right-width: 6px;
    border-bottom-width: 3px;
    transform: rotate(15deg);
  }
</style>
