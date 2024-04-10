# getActualClientRect

ALPHA

```bash
npm i actual-client-rect --save
```

## Problem

It was 2023 and web developers still didn't have any good options for obtaining the position and shape of an element on a page.

- People often use **getBoundingClientRect()**, which by nature obscures any transforms affecting the element.
- HTMLElement's offset api is annoying to work with, and the specs require the values to be rounded to the nearest pixel.
- Some libraries may have solved this problem internally, but to my knowledge no library exists that provides a direct solution, until now.

## Solution

**getActualClientRect()** returns the element's basis DOMRect relative to the viewport, its computed transform origin, and its accumulated transform in 3 formats: css transform string, css transform's matrix3d substring, and a glMatrix mat4

### API / Types / Documentation

```ts
export function getActualClientRect(element: HTMLElement, options?: ACROptions): ActualClientRect;

export type ActualClientRect = {
  basis: DOMRect;
  transformOrigin: string;
  transform: string; // `matrix3d(${matrix3d})`
  matrix3d: string;
  transformMat4: mat4; // row-major formatted array
};

export type ACROptions = {
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
```

![Example.svelte render](https://raw.githubusercontent.com/anxpara/getActualClientRect/75e76e7594f4fa3d3ead27e8272b619fdacaff1f/trialgrounds/static/images/example.png)

### Limitations

- getActualClientRect will not attempt to match, emulate, or mitigate bugs in rendering engines
  - [Stackoverflow: -webkit-transform-style: preserve-3d not working](https://stackoverflow.com/questions/11664255/webkit-transform-style-preserve-3d-not-working)
- perspective properties are not yet supported
- performance has not yet been profiled

# Contribute

All contributions are greatly appreciated!

- Feedback, feature requests, and help requests can be posted to the [Projectrix Discord](https://discord.gg/YxVAUFqW4e)
- If you find a bug, please [file an issue](https://github.com/anxpara/getActualClientRect/issues)
- [Join my Patreon](https://www.patreon.com/anxpara)

<3 anxpara
