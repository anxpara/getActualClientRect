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

export const allTestCases: Test[] = [
  { name: TestName.Control, testType: Control },
  { name: TestName.SubPixel, testType: SubPixel },
  { name: TestName.Relative, testType: Relative },
  { name: TestName.Absolute, testType: Absolute },
  { name: TestName.Fixed, testType: Fixed },
  { name: TestName.FixedInTransform, testType: FixedInTransform },
  { name: TestName.Scroll, testType: Scroll },
  { name: TestName.ScrollInRotate, testType: ScrollInRotate },
  { name: TestName.Sticky, testType: Sticky },
  { name: TestName.Translated, testType: Translated },
  { name: TestName.Rotated, testType: Rotated },
  { name: TestName.ParentRotated, testType: ParentRotated },
  { name: TestName.TwoRotations, testType: TwoRotations },
  { name: TestName.RotationsOrigin0, testType: Origin0Rotations },
  { name: TestName.Rotations3d, testType: Rotations3d },
  { name: TestName.RotationsPreserve3d, testType: RotationsPreserve3d },
  { name: TestName.Rotations3dCountering, testType: Rotations3dCountering },
  { name: TestName.RotationsPreserve3dCountering, testType: RotationsPreserve3dCountering },
  { name: TestName.Transforms3dComplicated, testType: Transforms3dComplicated },
  { name: TestName.TransformsPreserve3dComplicated, testType: TransformsPreserve3dComplicated },
];
export const testCasesByName = new Map<TestName, Test>(
  allTestCases.map((test) => [test.name, test]),
);
