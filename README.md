# getActualClientRect

ALPHA

```bash
npm i actual-client-rect --save
```

## Problem

It was 2023 and web developers still didn't have any good options for obtaining the position and shape of an element on a page.

- Most people use getBoundingClientRect, which by nature obscures any transforms affecting the element.
- HTMLElement's offset api is almost useful, except that the specs require the values to be rounded to the nearest pixel.
- At least one library (Framer Motion) has solved this problem internally, but to my knowledge no library exists that provides a direct solution, until now.

## Solution

getActualClientRect() returns the element's basis DOMRect relative to the viewport, its computed transform origin, and its accumulated transform in 3 formats: css transform string, css transform's matrix3d substring, and a gl-matrix mat4 (row-major formatted array).

### Types

```ts
function getActualClientRect(element: HTMLElement, options?: ACROptions): ActualClientRect;

type ActualClientRect = {
  basis: DOMRect;
  transformOrigin: string;
  transform: string;
  matrix3d: string;
  transformMat4: mat4;
};

type ACROptions = {
  // optimal for animations. sometimes causes subpixel differences due to
  // rendering differences between offsets and transforms
  bakePositionIntoTransform?: boolean;

  // return the transform relative to this origin on the element,
  // rather than the element's own origin.
  useTransformOrigin?: string;
};
```

### Example.svelte

(getActualClientRect does not require Svelte, but Svelte rocks!)

```svelte
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
      transformOrigin: acr.transformOrigin,
      matrix3d: acr.matrix3d,
    });
  });
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
    position: fixed; // absolute can work in the right context

    color: green;
  }
</style>
```

![Example.svelte render](https://raw.githubusercontent.com/anxpara/getActualClientRect/75e76e7594f4fa3d3ead27e8272b619fdacaff1f/trialgrounds/static/images/example.png)

### Limitations

- getActualClientRect will not attempt to match or emulate rendering engine bugs
- perspective properties are not yet supported

# Contribute

All contributions are greatly appreciated!

- Feedback, feature requests, and help requests can be posted to the [Projectrix Discord](https://discord.gg/YxVAUFqW4e)
- If you find a bug, please [file an issue](https://github.com/anxpara/getActualClientRect/issues)
- [Join my Patreon](https://www.patreon.com/anxpara)

<3 anxpara
