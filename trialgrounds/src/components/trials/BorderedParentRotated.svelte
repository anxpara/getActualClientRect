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
    border: solid 1px purple;
    outline: none;
    border-left-width: 9px;
    border-top-width: 12px;
    border-right-width: 6px;
    border-bottom-width: 3px;
    transform: rotate(15deg);
  }
</style>
