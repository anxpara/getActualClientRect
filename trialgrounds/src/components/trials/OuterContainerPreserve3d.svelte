<script lang="ts">
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.OuterContainerPreserve3d;

  let trialElement: HTMLElement;
  export function getTrialElement(): HTMLElement {
    return trialElement;
  }

  let outerContainer: HTMLElement;
  let innerContainer: HTMLElement;
  export function getContainers(): HTMLElement[] {
    return [outerContainer, innerContainer];
  }
</script>

<div bind:this={outerContainer} class="trial-container {trialName}-outer-container">
  <div bind:this={innerContainer} class="trial-container {trialName}-inner-container">
    <div bind:this={trialElement} class="trial-element {trialName}">{trialName}</div>
  </div>
</div>

<style lang="scss">
  .outer-container-preserve-3d-outer-container {
    width: fit-content;
    height: fit-content;
    padding: 1em;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transform: rotateY(65deg);

    .outer-container-preserve-3d-inner-container {
      width: fit-content;
      height: fit-content;
      padding: 1em;
      transform: rotateY(253deg);

      .outer-container-preserve-3d {
        transform: rotateY(25deg);
      }
    }
  }
</style>
