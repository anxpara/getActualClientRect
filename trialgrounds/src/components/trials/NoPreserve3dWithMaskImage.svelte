<script lang="ts">
  import type { Trial } from '$lib/trials/trials';
  import type { ACROptions } from 'actual-client-rect';

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
    width: fit-content;
    height: fit-content;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    mask-image: url(https://raw.githubusercontent.com/anxpara/getActualClientRect/75e76e7594f4fa3d3ead27e8272b619fdacaff1f/trialgrounds/static/images/example.png);
    -webkit-mask-image: url(https://raw.githubusercontent.com/anxpara/getActualClientRect/75e76e7594f4fa3d3ead27e8272b619fdacaff1f/trialgrounds/static/images/example.png);
    transform: rotateY(45deg);

    .trial-element {
      transform: rotateY(-45deg);
    }
  }
</style>
