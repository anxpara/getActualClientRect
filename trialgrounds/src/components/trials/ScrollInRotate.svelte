<script lang="ts">
  import { onMount } from 'svelte';
  import { TrialName } from '../../lib/trialNames';
  import type { ACROptions } from 'actual-client-rect';

  let trialName = TrialName.ScrollInRotate;

  let trialElement: HTMLElement;
  export function getTrialElement(): HTMLElement {
    return trialElement;
  }

  let container: HTMLElement;
  let scroller: HTMLElement;
  export function getContainers(): HTMLElement[] {
    return [container, scroller];
  }

  export function getACROptions(): ACROptions {
    return {};
  }

  onMount(() => {
    scroller.scrollTop = 70;
    scroller.scrollLeft = 50;
  });
</script>

<div bind:this={container} class="rotate-container">
  <div bind:this={scroller} class="trial-container {trialName}-container">
    <div class="filler">
      <div bind:this={trialElement} class="trial-element {trialName}">{trialName}</div>
    </div>
  </div>
</div>

<style lang="scss">
  .rotate-container {
    transform: rotate(15deg);

    .scroll-in-rotate-container {
      overflow: scroll;

      .filler {
        width: 20em;
        height: 20em;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
