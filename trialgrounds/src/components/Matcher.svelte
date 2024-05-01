<script lang="ts">
  import anime from 'animejs';
  import { getActualClientRect } from 'actual-client-rect';
  import { getContext, onDestroy, onMount, tick } from 'svelte';
  import type { Trial } from '$lib/trials/trials';
  import type { Writable } from 'svelte/store';
  import type { Options } from '$lib/options';

  export let element: HTMLElement | undefined;
  export let trial: Trial | undefined;
  export let matchOnce = false;
  export let isBasis = false;
  export let isContainer = false;

  const options = getContext<Writable<Options>>('options');

  let matcher: HTMLElement;
  let matched = false;
  let matchInterval: NodeJS.Timeout | undefined = undefined;

  onMount(async () => {
    await tick();

    match();

    matchInterval = setInterval(match, 1000);
  });

  onDestroy(() => {
    clearInterval(matchInterval);
  });

  export function match(): void {
    if (matchOnce && matched) return;
    if (!element) return;

    matcher.innerText = trial?.name ?? '';

    const acr = getActualClientRect(element, trial?.trialComponent?.getACROptions());

    if ($options.log && !isBasis) {
      console.log(acr);
    }

    if (isBasis) {
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

    matched = true;
  }
</script>

<div bind:this={matcher} class="matcher" class:isBasis class:isContainer />

<style lang="scss">
  .matcher {
    position: absolute;
    font-size: 2em;
    font-weight: 500;

    top: 0;
    left: 0;

    outline: solid 2px;

    color: green;
  }

  .isBasis {
    outline-style: dashed;
    pointer-events: none;
  }

  .isContainer {
    color: purple;
  }
</style>
