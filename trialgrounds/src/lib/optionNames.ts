export const OptionName = {
  Log: 'log',
  HideUI: 'hideUI',
  MatchOnce: 'matchOnce',
  ShowBasis: 'showBasis',
};
export type OptionName = (typeof OptionName)[keyof typeof OptionName];
export const allOptionNames: string[] = Object.values(OptionName);

export const sharedOptionNames = [OptionName.Log, OptionName.HideUI];
export const trialOptionNames = [OptionName.MatchOnce, OptionName.ShowBasis];
export const forPlaywrightOptionNames = [OptionName.HideUI, OptionName.MatchOnce];
