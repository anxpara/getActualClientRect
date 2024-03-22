export const TrialName = {
  Control: 'control',
  BakePosition: 'bake-position',
  KeepInlineTransform: 'keep-inline-transform',
  SubPixel: 'sub-pixel',
  Bordered: 'bordered',
  BorderedParentRotated: 'bordered-parent-rotated',
  Relative: 'relative',
  Absolute: 'absolute',
  AbsoluteInTransform: 'absolute-in-transform',
  Fixed: 'fixed',
  FixedInTransform: 'fixed-in-transform',
  FixedInFilter: 'fixed-in-filter',
  Scroll: 'scroll',
  ScrollInRotate: 'scroll-in-rotate',
  Sticky: 'sticky',
  Translated: 'translated',
  Rotated: 'rotated',
  ParentRotated: 'parent-rotated',
  PaddedParentRotated: 'padded-parent-rotated',
  MarginedChildInRotate: 'margined-child-in-rotate',
  TwoRotations: 'two-rotations',
  RotationsOrigin0: 'rotations-origin-0',
  RotationOrigin0UseCenter: 'rotation-origin-0-use-center',
  Rotations3d: 'rotations-3d',
  RotationsPreserve3d: 'rotations-preserve-3d',
  Rotations3dCountering: 'rotations-3d-countering',
  RotationsPreserve3dCountering: 'rotations-preserve-3d-countering',
  Transforms3dComplicated: 'transforms-3d-complicated',
  TransformsPreserve3dComplicated: 'transforms-preserve-3d-complicated',
  TwoContainersPreserve3d: 'two-containers-preserve-3d',
  OuterContainerPreserve3d: 'outer-container-preserve-3d',
} as const;
export type TrialName = (typeof TrialName)[keyof typeof TrialName];
export const trialNames: string[] = Object.values(TrialName);
