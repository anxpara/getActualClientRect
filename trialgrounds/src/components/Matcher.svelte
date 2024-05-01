<script lang="ts">
  import anime from 'animejs';
  import { getActualClientRect } from 'actual-client-rect';
  import { onDestroy, onMount, tick } from 'svelte';
  import type { Trial } from '$lib/trials/trials';

  export let element: HTMLElement | undefined;
  export let trial: Trial | undefined;
  export let untransformed = false;
  export let matchOnce = false;
  let matcher: HTMLElement;

  let matchInterval: NodeJS.Timeout | undefined = undefined;

  onMount(async () => {
    await tick();

    match();
    if (matchOnce) return;

    matchInterval = setInterval(match, 1000);
  });

  onDestroy(() => {
    clearInterval(matchInterval);
  });

  export function match(): void {
    if (!element) return;

    matcher.innerText = trial?.name ?? '';

    const acr = getActualClientRect(element, trial?.trialComponent?.getACROptions());

    if (untransformed) {
      acr.matrix3d = '';
    }

    anime.set(matcher, {
      width: acr.basis.width,
      height: acr.basis.height,
      top: acr.basis.top,
      left: acr.basis.left,
      transformOrigin: acr.transformOrigin,
      matrix3d: acr.matrix3d,
    });
  }
</script>

<div bind:this={matcher} class="matcher" class:untransformed />

<style lang="scss">
  .untransformed {
    outline-style: dashed;
    color: coral;
    pointer-events: none;
  }

  .matcher {
    position: absolute;
    font-size: 2em;
    font-weight: 500;

    top: 0;
    left: 0;

    outline: solid 2px;

    color: green;
  }
</style>
