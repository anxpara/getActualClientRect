<script lang="ts">
  import '../app.scss';
  import { derived, writable } from 'svelte/store';
  import { getUrlForOptions, type Options } from '$lib/options';
  import { setContext } from 'svelte';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import MainMenu from '../components/menus/MainMenu.svelte';

  export let data;

  const options = writable<Options>(data.options);
  setContext('options', options);

  const pageUrl = derived(page, (page) => {
    return page.url;
  });
  setContext('pageUrl', pageUrl);

  if (browser) {
    window.addEventListener('popstate', handlePopstate);
    options.subscribe(handleOptionsChanged);
  }

  function handlePopstate(): void {
    setUrlToOptions($options);
  }

  function handleOptionsChanged(newOptions: Options): void {
    setUrlToOptions(newOptions);
  }

  function setUrlToOptions(options: Options): void {
    if (!browser) return;

    const currentParams = $page.url.searchParams;
    const nextUrl = getUrlForOptions(options, currentParams);

    setTimeout(() => {
      goto(nextUrl, { replaceState: true, keepFocus: true });
    }, 1);
  }
</script>

{#if !$options.hideUI}
  <MainMenu />
{/if}

<slot />
