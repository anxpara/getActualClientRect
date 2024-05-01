<script lang="ts">
  import type { ACROptions } from 'actual-client-rect';
  import type { Trial } from '$lib/trials/trials';

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

<div class="trial-container outer-container">
  <div class="trial-container inner-container-fail" style="transform: rotate(15deg);" />
  <div
    bind:this={container}
    class="trial-container inner-container"
    style="transform: rotate(15deg);"
  >
    <div class="trial-element" style="transform: rotate(15deg);">{trial.name}</div>
    <div bind:this={trialElement} class="trial-element" style="transform: rotate(15deg);">
      {trial.name}
    </div>
  </div>
</div>

<style lang="scss">
  .inner-container-fail {
    position: absolute;
    color: red;
  }
  .inner-container {
    position: absolute;

    .trial-element {
      position: absolute;
    }
  }
</style>
