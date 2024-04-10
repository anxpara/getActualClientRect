<script lang="ts">
  import type { ACROptions } from 'actual-client-rect';
  import type { Trial } from '$lib/trials';

  export let trial: Trial;

  let trialElement: HTMLElement;
  export function getTrialElement(): HTMLElement {
    return trialElement;
  }

  let outerContainer: HTMLElement;
  let innerContainer: HTMLElement;
  export function getContainers(): HTMLElement[] {
    return [outerContainer, innerContainer];
  }

  export function getACROptions(): ACROptions {
    return {};
  }
</script>

<div bind:this={outerContainer} class="trial-container outer-container">
  <div bind:this={innerContainer} class="trial-container inner-container">
    <div bind:this={trialElement} class="trial-element">{trial.name}</div>
  </div>
</div>

<style lang="scss">
  .outer-container {
    width: fit-content;
    height: fit-content;
    padding: 1em;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transform: rotateY(65deg);

    .inner-container {
      width: fit-content;
      height: fit-content;
      padding: 1em;
      transform-style: preserve-3d;
      -webkit-transform-style: preserve-3d;
      transform: rotateY(253deg);

      .trial-element {
        transform: rotateY(25deg);
      }
    }
  }
</style>
