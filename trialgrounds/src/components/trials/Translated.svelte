<script lang="ts">
  import type { ACROptions } from 'actual-client-rect';
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.Translated;

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
  .translated {
    transform: translate(1em, 1em);
  }
</style>
