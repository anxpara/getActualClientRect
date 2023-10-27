import type { ComponentType, SvelteComponent } from 'svelte';
import type Matcher from '../components/Matcher.svelte';
import { TrialName as TrialName } from './trialNames';
import Control from '../components/trials/Control.svelte';
import SubPixel from '../components/trials/SubPixel.svelte';
import Rotated from '../components/trials/Rotated.svelte';
import ParentRotated from '../components/trials/ParentRotated.svelte';
import TwoRotations from '../components/trials/TwoRotations.svelte';
import Relative from '../components/trials/Relative.svelte';
import Absolute from '../components/trials/Absolute.svelte';
import Fixed from '../components/trials/Fixed.svelte';
import Translated from '../components/trials/Translated.svelte';
import Origin0Rotations from '../components/trials/RotationsOrigin0.svelte';
import Rotations3d from '../components/trials/Rotations3d.svelte';
import RotationsPreserve3d from '../components/trials/RotationsPreserve3d.svelte';
import Rotations3dCountering from '../components/trials/Rotations3dCountering.svelte';
import RotationsPreserve3dCountering from '../components/trials/RotationsPreserve3dCountering.svelte';
import Transforms3dComplicated from '../components/trials/Transforms3dComplicated.svelte';
import TransformsPreserve3dComplicated from '../components/trials/TransformsPreserve3dComplicated.svelte';
import Scroll from '../components/trials/Scroll.svelte';
import ScrollInRotate from '../components/trials/ScrollInRotate.svelte';
import Sticky from '../components/trials/Sticky.svelte';
import FixedInTransform from '../components/trials/FixedInTransform.svelte';
import KeepInlineTransform from '../components/trials/KeepInlineTransform.svelte';
import TwoContainersPreserve3d from '../components/trials/TwoContainersPreserve3d.svelte';
import OuterContainerPreserve3d from '../components/trials/OuterContainerPreserve3d.svelte';
import PaddedParentRotated from '../components/trials/PaddedParentRotated.svelte';
import MarginedChildInRotate from '../components/trials/MarginedChildInRotate.svelte';
import Bordered from '../components/trials/Bordered.svelte';
import BorderedParentRotated from '../components/trials/BorderedParentRotated.svelte';

export interface TrialControls {
  getTrialElement: () => HTMLElement;
  getContainers: () => HTMLElement[];
}

export type TrialComponent = SvelteComponent & TrialControls;

export type Trial = {
  name: TrialName;
  trialType: ComponentType<TrialComponent>;
  trialComponent?: TrialComponent;
};

export const allTrials: Trial[] = [
  { name: TrialName.Control, trialType: Control },
  { name: TrialName.KeepInlineTransform, trialType: KeepInlineTransform },
  { name: TrialName.SubPixel, trialType: SubPixel },
  { name: TrialName.Bordered, trialType: Bordered },
  { name: TrialName.BorderedParentRotated, trialType: BorderedParentRotated },
  { name: TrialName.Relative, trialType: Relative },
  { name: TrialName.Absolute, trialType: Absolute },
  { name: TrialName.Fixed, trialType: Fixed },
  { name: TrialName.FixedInTransform, trialType: FixedInTransform },
  { name: TrialName.Scroll, trialType: Scroll },
  { name: TrialName.ScrollInRotate, trialType: ScrollInRotate },
  { name: TrialName.Sticky, trialType: Sticky },
  { name: TrialName.Translated, trialType: Translated },
  { name: TrialName.Rotated, trialType: Rotated },
  { name: TrialName.ParentRotated, trialType: ParentRotated },
  { name: TrialName.PaddedParentRotated, trialType: PaddedParentRotated },
  { name: TrialName.MarginedChildInRotate, trialType: MarginedChildInRotate },
  { name: TrialName.TwoRotations, trialType: TwoRotations },
  { name: TrialName.RotationsOrigin0, trialType: Origin0Rotations },
  { name: TrialName.Rotations3d, trialType: Rotations3d },
  { name: TrialName.RotationsPreserve3d, trialType: RotationsPreserve3d },
  { name: TrialName.Rotations3dCountering, trialType: Rotations3dCountering },
  { name: TrialName.RotationsPreserve3dCountering, trialType: RotationsPreserve3dCountering },
  { name: TrialName.Transforms3dComplicated, trialType: Transforms3dComplicated },
  { name: TrialName.TransformsPreserve3dComplicated, trialType: TransformsPreserve3dComplicated },
  { name: TrialName.TwoContainersPreserve3d, trialType: TwoContainersPreserve3d },
  { name: TrialName.OuterContainerPreserve3d, trialType: OuterContainerPreserve3d },
];
export const trialsByName = new Map<TrialName, Trial>(
  allTrials.map((trial) => [trial.name, trial]),
);
