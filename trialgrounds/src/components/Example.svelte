<script lang="ts">
  import { onMount } from 'svelte';
  import { getActualClientRect } from 'actual-client-rect';
  import anime from 'animejs';

  let baseElement: HTMLElement;
  let matchingElement: HTMLElement;

  onMount(() => {
    const acr = getActualClientRect(baseElement);

    // set or animate the element however you want. i like anime.js
    anime.set(matchingElement, {
      top: acr.basis.top,
      left: acr.basis.left,
      width: acr.basis.width,
      height: acr.basis.height,
      matrix3d: acr.matrix3d,
    });
  });
</script>

<div bind:this={baseElement} class="base" />
<div bind:this={matchingElement} class="matching" />

<style lang="scss">
  .base,
  .matching {
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
    position: fixed; // absolute can work in the right context

    color: green;
  }
</style>
