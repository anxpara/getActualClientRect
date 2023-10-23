export const TestName = {
  Control: 'control',
  SubPixel: 'sub-pixel',
  Rotated: 'rotated',
  ParentRotated: 'parent-rotated',
  TwoRotations: 'two-rotations',
} as const;
export type TestName = (typeof TestName)[keyof typeof TestName];
export const testNames: string[] = Object.values(TestName);
