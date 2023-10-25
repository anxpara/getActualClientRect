import type { ComponentType, SvelteComponent } from 'svelte';
import type Matcher from '../components/Matcher.svelte';
import { TestName } from './testNames';
import Control from '../components/test-cases/Control.svelte';
import SubPixel from '../components/test-cases/SubPixel.svelte';
import Rotated from '../components/test-cases/Rotated.svelte';
import ParentRotated from '../components/test-cases/ParentRotated.svelte';
import TwoRotations from '../components/test-cases/TwoRotations.svelte';
import Relative from '../components/test-cases/Relative.svelte';
import Absolute from '../components/test-cases/Absolute.svelte';
import Fixed from '../components/test-cases/Fixed.svelte';
import Translated from '../components/test-cases/Translated.svelte';
import Origin0Rotations from '../components/test-cases/RotationsOrigin0.svelte';
import Rotations3d from '../components/test-cases/Rotations3d.svelte';
import RotationsPreserve3d from '../components/test-cases/RotationsPreserve3d.svelte';
import Rotations3dCountering from '../components/test-cases/Rotations3dCountering.svelte';
import RotationsPreserve3dCountering from '../components/test-cases/RotationsPreserve3dCountering.svelte';
import Transforms3dComplicated from '../components/test-cases/Transforms3dComplicated.svelte';
import TransformsPreserve3dComplicated from '../components/test-cases/TransformsPreserve3dComplicated.svelte';
import Scroll from '../components/test-cases/Scroll.svelte';
import ScrollInRotate from '../components/test-cases/ScrollInRotate.svelte';
import Sticky from '../components/test-cases/Sticky.svelte';
import FixedInTransform from '../components/test-cases/FixedInTransform.svelte';

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
export const relativeTestCase: Test = {
  name: TestName.Relative,
  testType: Relative,
};
export const absoluteTestCase: Test = {
  name: TestName.Absolute,
  testType: Absolute,
};
export const fixedTestCase: Test = {
  name: TestName.Fixed,
  testType: Fixed,
};
export const fixedInTransformTestCase: Test = {
  name: TestName.FixedInTransform,
  testType: FixedInTransform,
};
export const scrollTestCase: Test = {
  name: TestName.Scroll,
  testType: Scroll,
};
export const scrollInRotateTestCase: Test = {
  name: TestName.ScrollInRotate,
  testType: ScrollInRotate,
};
export const stickyTestCase: Test = {
  name: TestName.Sticky,
  testType: Sticky,
};
export const translatedTestCase: Test = {
  name: TestName.Translated,
  testType: Translated,
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
export const rotationsOrigin0TestCase: Test = {
  name: TestName.RotationsOrigin0,
  testType: Origin0Rotations,
};
export const rotations3dTestCase: Test = {
  name: TestName.Rotations3d,
  testType: Rotations3d,
};
export const rotationsPreserve3dTestCase: Test = {
  name: TestName.RotationsPreserve3d,
  testType: RotationsPreserve3d,
};
export const rotations3dCounteringTestCase: Test = {
  name: TestName.Rotations3dCountering,
  testType: Rotations3dCountering,
};
export const rotationsPreserve3dCounteringTestCase: Test = {
  name: TestName.RotationsPreserve3dCountering,
  testType: RotationsPreserve3dCountering,
};
export const transforms3dComplicatedTestCase: Test = {
  name: TestName.Transforms3dComplicated,
  testType: Transforms3dComplicated,
};
export const transformsPreserve3dComplicatedTestCase: Test = {
  name: TestName.TransformsPreserve3dComplicated,
  testType: TransformsPreserve3dComplicated,
};

export const allTestCases = [
  controlTestCase,
  subPixelTestCase,
  relativeTestCase,
  absoluteTestCase,
  fixedTestCase,
  fixedInTransformTestCase,
  scrollTestCase,
  scrollInRotateTestCase,
  stickyTestCase,
  translatedTestCase,
  rotatedTestCase,
  parentRotatedTestCase,
  twoRotationsTestCase,
  rotationsOrigin0TestCase,
  rotations3dTestCase,
  rotationsPreserve3dTestCase,
  rotations3dCounteringTestCase,
  rotationsPreserve3dCounteringTestCase,
  transforms3dComplicatedTestCase,
  transformsPreserve3dComplicatedTestCase,
];
export const testCasesByName = new Map<TestName, Test>(
  allTestCases.map((test) => [test.name, test]),
);
