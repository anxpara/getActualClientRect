<script lang="ts">
  import { onMount } from 'svelte';
  import type { Trial } from '$lib/trials';
  import type { ACROptions } from 'actual-client-rect';

  export let trial: Trial;

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

<div bind:this={container} class="outer-container">
  <div bind:this={scroller} class="trial-container inner-container">
    <div class="filler">
      <div bind:this={trialElement} class="trial-element">{trial.name}</div>
    </div>
  </div>
</div>

<style lang="scss">
  .outer-container {
    transform: rotate(15deg);

    .inner-container {
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
