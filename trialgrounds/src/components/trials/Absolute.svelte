<script lang="ts">
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.Absolute;

  let trialElement: HTMLElement;
  export function getTrialElement(): HTMLElement {
    return trialElement;
  }
</script>

<div class="trial-container {trialName}">
  <div bind:this={trialElement} class="trial-element {trialName}">{trialName}</div>
</div>

<style lang="scss">
  .trial-container.absolute {
    position: relative;

    .absolute {
      position: absolute;
      right: 1em;
      bottom: 1em;
    }
  }
</style>
