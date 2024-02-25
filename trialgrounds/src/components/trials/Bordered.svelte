<script lang="ts">
  import type { ACROptions } from 'actual-client-rect';
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.Bordered;

  let trialElement: HTMLElement;
  export function getTrialElement(): HTMLElement {
    return trialElement;
  }

  export function getContainers(): HTMLElement[] {
    return [];
  }

  export function getACROptions(): ACROptions {
    return {};
  }
</script>

<div bind:this={trialElement} class="trial-element {trialName}">{trialName}</div>

<style lang="scss">
  .bordered {
    border: solid 1px yellow;
    color: yellow;
    border-left-width: 3px;
    border-top-width: 6px;
    border-right-width: 9px;
    border-bottom-width: 12px;
    display: flex;
    align-items: end;
  }
</style>
