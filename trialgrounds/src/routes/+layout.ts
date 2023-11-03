// source of truth for TDSource, TDSequenceName, client fetch interval, log level, etc.
/** @type {import('./$types').LayoutLoad} */
export async function load({ params, url }) {
  const trialNames = url.searchParams.get('trialNames')?.split(',') ?? [];
  const forPlaywright = url.searchParams.has('forPlaywright');
  const matchOnce = url.searchParams.has('matchOnce') || forPlaywright;
  const showUntransformedRect = url.searchParams.has('showUntransformedRect') && !forPlaywright;
  const showUntransformedContainers =
    url.searchParams.has('showUntransformedContainers') && !forPlaywright;

  return {
    trialNames,
    showUntransformedRect,
    showUntransformedContainers,
    matchOnce,
    forPlaywright,
  };
}
