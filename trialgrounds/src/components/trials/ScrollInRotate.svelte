<script lang="ts">
  import { onMount } from 'svelte';
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.ScrollInRotate;

  let scroller: HTMLElement;
  let trialElement: HTMLElement;
  export function getTrialElement(): HTMLElement {
    return trialElement;
  }

  onMount(() => {
    scroller.scrollTop = 70;
    scroller.scrollLeft = 50;
  });
</script>

<div class="rotate-container">
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
