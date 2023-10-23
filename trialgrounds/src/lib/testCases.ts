import type { ComponentType, SvelteComponent } from 'svelte';
import type Matcher from '../components/Matcher.svelte';
import { TestName } from './testNames';
import Control from '../components/test-cases/Control.svelte';
import SubPixel from '../components/test-cases/SubPixel.svelte';
import Rotated from '../components/test-cases/Rotated.svelte';
import ParentRotated from '../components/test-cases/ParentRotated.svelte';
import TwoRotations from '../components/test-cases/TwoRotations.svelte';

export interface TestControls {
  getTestElement: () => HTMLElement;
}

export type TestCaseComponent = SvelteComponent & TestControls;

export type Test = {
  name: TestName;
  testType: ComponentType<TestCaseComponent>;
  testComponent?: TestCaseComponent;
  matcher?: Matcher;
};

export const controlTestCase: Test = {
  name: TestName.Control,
  testType: Control,
};
export const subPixelTestCase: Test = {
  name: TestName.SubPixel,
  testType: SubPixel,
};
export const rotatedTestCase: Test = {
  name: TestName.Rotated,
  testType: Rotated,
};
export const parentRotatedTestCase: Test = {
  name: TestName.ParentRotated,
  testType: ParentRotated,
};
export const twoRotationsTestCase: Test = {
  name: TestName.TwoRotations,
  testType: TwoRotations,
};

export const allTestCases = [
  controlTestCase,
  subPixelTestCase,
  rotatedTestCase,
  parentRotatedTestCase,
  twoRotationsTestCase,
];
export const testCasesByName = new Map<TestName, Test>(
  allTestCases.map((test) => [test.name, test]),
);
