<script lang="ts">
  import anime from 'animejs';
  import { getActualClientRect } from 'actual-client-rect';

  let matcher: HTMLElement;

  export function match(element: HTMLElement, testName: string): void {
    matcher.innerText = testName;

    const acr = getActualClientRect(element);
    anime.set(matcher, {
      width: acr.rect.width,
      height: acr.rect.height,
      top: acr.rect.top,
      left: acr.rect.left,
      matrix3d: acr.matrix3d,
    });
  }
</script>

<div bind:this={matcher} class="matcher" />
