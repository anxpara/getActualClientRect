<script lang="ts">
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.SubPixel;

  let trialElement: HTMLElement;
  export function getTrialElement(): HTMLElement {
    return trialElement;
  }
</script>

<div class="trial-container {trialName}-container">
  <div bind:this={trialElement} class="trial-element {trialName}">{trialName}</div>
</div>

<style lang="scss">
  .sub-pixel-container {
    position: fixed;
    top: 10.2px;
    left: 10.2px;

    .sub-pixel {
      position: absolute;
      top: 10.4px;
      left: 10.4px;

      width: 160.757575757px;
      height: 128.123456789px;
    }
  }
</style>
