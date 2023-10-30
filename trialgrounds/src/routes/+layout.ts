// source of truth for TDSource, TDSequenceName, client fetch interval, log level, etc.
/** @type {import('./$types').LayoutLoad} */
export async function load({ params, url }) {
  const trialNames = url.searchParams.get('trialNames')?.split(',') ?? [];
  const showUntransformedRect = url.searchParams.has('showUntransformedRect');
  const showUntransformedContainers = url.searchParams.has('showUntransformedContainers');
  const matchOnce = url.searchParams.has('matchOnce');

  return { trialNames, showUntransformedRect, showUntransformedContainers, matchOnce };
}
