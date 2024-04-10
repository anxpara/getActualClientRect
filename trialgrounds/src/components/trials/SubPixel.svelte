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
    position: fixed;
    top: 10.2px;
    left: 10.2px;

    .trial-element {
      position: absolute;
      top: 10.4px;
      left: 10.4px;

      width: 160.757575757px;
      height: 128.123456789px;
    }
  }
</style>
