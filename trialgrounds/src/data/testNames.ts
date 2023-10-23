export const TestName = {
  Control: 'control',
  SubPixelSize: 'sub-pixel-size',
  Rotated: 'rotated',
  ParentRotated: 'parent-rotated',
  TwoRotations: 'two-rotations',
} as const;
export type TestName = (typeof TestName)[keyof typeof TestName];
export const testNames: string[] = Object.values(TestName);
