<script lang="ts">
  import type { ACROptions } from 'actual-client-rect';
  import type { Trial } from '$lib/trials';

  export let trial: Trial;

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

<div bind:this={container} class="trial-container">
  <div bind:this={trialElement} class="trial-element">{trial.name}</div>
</div>

<style lang="scss">
  .trial-container {
    transform: rotate(15deg);

    .trial-element {
      transform: rotate(15deg);
    }
  }
</style>
