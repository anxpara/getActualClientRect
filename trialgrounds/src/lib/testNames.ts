export const TestName = {
  Control: 'control',
  SubPixel: 'sub-pixel',
  Relative: 'relative',
  Absolute: 'absolute',
  Fixed: 'fixed',
  FixedInTransform: 'fixed-in-transform',
  Scroll: 'scroll',
  ScrollInRotate: 'scroll-in-rotate',
  Sticky: 'sticky',
  Translated: 'translated',
  Rotated: 'rotated',
  ParentRotated: 'parent-rotated',
  TwoRotations: 'two-rotations',
  RotationsOrigin0: 'rotations-origin-0',
  Rotations3d: 'rotations-3d',
  RotationsPreserve3d: 'rotations-preserve-3d',
  Rotations3dCountering: 'rotations-3d-countering',
  RotationsPreserve3dCountering: 'rotations-preserve-3d-countering',
  Transforms3dComplicated: 'transforms-3d-complicated',
  TransformsPreserve3dComplicated: 'transforms-preserve-3d-complicated',
} as const;
export type TestName = (typeof TestName)[keyof typeof TestName];
export const testNames: string[] = Object.values(TestName);
