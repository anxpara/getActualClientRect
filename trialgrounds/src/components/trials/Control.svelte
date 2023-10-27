<script lang="ts">
  import { TrialName } from '../../lib/trialNames';

  let trialName = TrialName.Control;

  let trialElement: HTMLElement;
  export function getTrialElement(): HTMLElement {
    return trialElement;
  }

  export function getContainers(): HTMLElement[] {
    return [];
  }
</script>

<div bind:this={trialElement} class="trial-element {trialName}">{trialName}</div>
