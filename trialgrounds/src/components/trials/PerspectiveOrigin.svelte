<script lang="ts">
  import type { ACROptions } from 'actual-client-rect';
  import type { Trial } from '$lib/trials/trials';

  export let trial: Trial;

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
  <div bind:this={trialElement} class="trial-element">{trial.name}</div>
</div>

<style lang="scss">
  .trial-container {
    perspective: 200px;
    perspective-origin: bottom left;
  }

  .trial-element {
    transform: rotateX(-45deg) rotateY(10deg);
  }
</style>
