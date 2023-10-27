<script lang="ts">
  import anime from 'animejs';
  import { getActualClientRect } from 'actual-client-rect';

  export let untransformed = false;
  let matcher: HTMLElement;

  export function match(element: HTMLElement, trialName: string): void {
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
  }
</style>
