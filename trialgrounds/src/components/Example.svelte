<script lang="ts">
  import { onMount } from 'svelte';
  import { getActualClientRect } from 'actual-client-rect';

  let baseElement: HTMLElement;
  let matchingElement: HTMLElement;

  onMount(() => {
    match();
  });

  function match(): void {
    const acr = getActualClientRect(baseElement);

    matchingElement.style.left = `${acr.basis.left}px`;
    matchingElement.style.top = `${acr.basis.top}px`;
    matchingElement.style.width = `${acr.basis.width}px`;
    matchingElement.style.height = `${acr.basis.height}px`;
    matchingElement.style.transformOrigin = acr.transformOrigin;
    matchingElement.style.transform = acr.transform;
  }
</script>

<div bind:this={baseElement} class="base" />
<div bind:this={matchingElement} class="matching" />

<style lang="scss">
  .base, .matching {
    outline: solid 2px;
  }

  .base {
    position: relative;
    top: 5em;
    left: 5em;
    width: 5em;
    height: 5em;

    transform: rotate(15deg);

    color: yellow;
  }

  .matching {
    position: fixed; // absolute works if offset parent is flush with viewport

    color: green;
  }
</style>