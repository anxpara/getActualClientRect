<script lang="ts">
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.KeepInlineTransform;

  let trialElement: HTMLElement;
  export function getTrialElement(): HTMLElement {
    return trialElement;
  }

  let container: HTMLElement;
  export function getContainers(): HTMLElement[] {
    return [container];
  }
</script>

<div class="trial-container">
  <div class="trial-container {trialName}-container-fail" style="transform: rotate(15deg);" />
  <div
    bind:this={container}
    class="trial-container {trialName}-container"
    style="transform: rotate(15deg);"
  >
    <div class="trial-element {trialName}" style="transform: rotate(15deg);">{trialName}</div>
    <div
      bind:this={trialElement}
      class="trial-element {trialName}"
      style="transform: rotate(15deg);"
    >
      {trialName}
    </div>
  </div>
</div>

<style lang="scss">
  .keep-inline-transform-container-fail {
    position: absolute;
    color: red;
  }
  .keep-inline-transform-container {
    position: absolute;

    .keep-inline-transform {
      position: absolute;
    }
  }
</style>
