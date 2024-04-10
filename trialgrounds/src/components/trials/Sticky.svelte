<script lang="ts">
  import { onMount } from 'svelte';
  import type { Trial } from '$lib/trials';
  import type { ACROptions } from 'actual-client-rect';

  export let trial: Trial;

  let trialElement: HTMLElement;
  export function getTrialElement(): HTMLElement {
    return trialElement;
  }

  let scroller: HTMLElement;
  export function getContainers(): HTMLElement[] {
    return [scroller];
  }

  export function getACROptions(): ACROptions {
    return {};
  }

  onMount(() => {
    scroller.scrollTop = 150;
  });
</script>

<div bind:this={scroller} class="trial-container">
  <div class="spacer" />
  <div bind:this={trialElement} class="trial-element">{trial.name}</div>
  <div class="spacer" />
</div>

<style lang="scss">
  .trial-container {
    position: relative;
    overflow: scroll;
    outline: none;
    border: solid 1px purple;

    .spacer {
      width: 100px;
      height: 100px;
      border: solid 1px coral;
    }

    .trial-element {
      position: sticky;
      top: 2px;
      left: 2px;
    }
  }
</style>
