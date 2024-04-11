<script lang="ts">
  import type { ACROptions } from 'actual-client-rect';
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.Perspective;

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

<div class="trial-container">
  <div bind:this={trialElement} class="trial-element {trialName}">{trialName}</div>
</div>

<style lang="scss">
  .trial-container {
    perspective: 200px;
  }

  .perspective {
    transform: rotateX(-45deg) rotateY(10deg);
  }
</style>
