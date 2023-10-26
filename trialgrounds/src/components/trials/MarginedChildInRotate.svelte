<script lang="ts">
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.MarginedChildInRotate;

  let trialElement: HTMLElement;
  export function getTrialElement(): HTMLElement {
    return trialElement;
  }
</script>

<div class="trial-container {trialName}-container">
  <div bind:this={trialElement} class="trial-element {trialName}">{trialName}</div>
</div>

<style lang="scss">
  .margined-child-in-rotate-container {
    overflow: auto;
    transform: rotate(15deg);

    .margined-child-in-rotate {
      margin: 0.5em;
    }
  }
</style>
