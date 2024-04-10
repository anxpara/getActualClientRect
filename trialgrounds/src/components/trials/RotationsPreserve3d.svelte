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
  <div bind:this={trialElement} class="trial-element">
    {trial.name}
  </div>
</div>

<style lang="scss">
  .trial-container {
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transform: rotateX(10deg) rotateZ(10deg);

    .trial-element {
      transform: rotateX(40deg) rotateZ(35deg);
    }
  }
</style>
