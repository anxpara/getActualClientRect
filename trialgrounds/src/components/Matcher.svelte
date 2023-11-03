<script lang="ts">
  import anime from 'animejs';
  import { getActualClientRect } from 'actual-client-rect';
  import { onDestroy, onMount, tick } from 'svelte';

  export let element: HTMLElement | undefined;
  export let trialName: string;
  export let untransformed = false;
  export let matchOnce = false;
  let matcher: HTMLElement;

  let matchInterval: NodeJS.Timeout | undefined = undefined;

  onMount(async () => {
    await tick();

    match();
    if (matchOnce) return;

    matchInterval = setInterval(match, 300);
  });

  onDestroy(() => {
    clearInterval(matchInterval);
  });

  export function match(): void {
    if (!element) return;

    matcher.innerText = trialName;

    const acr = getActualClientRect(element);

    if (untransformed) {
      acr.matrix3d = '';
    }

    anime.set(matcher, {
      width: acr.basis.width,
      height: acr.basis.height,
      top: acr.basis.top,
      left: acr.basis.left,
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
</style>
