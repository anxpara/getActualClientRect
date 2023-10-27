<script lang="ts">
  import anime from 'animejs';
  import { getActualClientRect } from 'actual-client-rect';
  import { onDestroy, onMount, tick } from 'svelte';

  export let element: HTMLElement | undefined;
  export let trialName: string;
  export let untransformed = false;
  let matcher: HTMLElement;

  let matchInterval: NodeJS.Timeout | undefined = undefined;

  onMount(async () => {
    await tick();

    match();
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
      width: acr.rect.width,
      height: acr.rect.height,
      top: acr.rect.top,
      left: acr.rect.left,
      matrix3d: acr.matrix3d,
    });
  }
</script>

<div bind:this={matcher} class="matcher" class:untransformed />

<style lang="scss">
  .untransformed {
    outline-style: dashed;
    color: coral;
  }
</style>
