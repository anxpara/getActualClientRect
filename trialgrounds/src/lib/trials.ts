import type { ComponentType, SvelteComponent } from 'svelte';
import { TrialName as TrialName } from './trialNames';
import Control from '../components/trials/Control.svelte';
import BakePosition from '../components/trials/BakePosition.svelte';
import SubPixel from '../components/trials/SubPixel.svelte';
import Rotated from '../components/trials/Rotated.svelte';
import ParentRotated from '../components/trials/ParentRotated.svelte';
import TwoRotations from '../components/trials/TwoRotations.svelte';
import Relative from '../components/trials/Relative.svelte';
import Absolute from '../components/trials/Absolute.svelte';
import Fixed from '../components/trials/Fixed.svelte';
import Translated from '../components/trials/Translated.svelte';
import Origin0Rotations from '../components/trials/RotationsOrigin0.svelte';
import RotationOrigin0UseCenter from '../components/trials/RotationOrigin0UseCenter.svelte';
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
import type { ACROptions } from 'actual-client-rect';
import AbsoluteInTransform from '../components/trials/AbsoluteInTransform.svelte';
import FixedInFilter from '../components/trials/FixedInFilter.svelte';
import NoPreserve3dWithOverflow from '../components/trials/NoPreserve3dWithOverflow.svelte';
import NoPreserve3dWithOpacity from '../components/trials/NoPreserve3dWithOpacity.svelte';
import NoPreserve3dWithFilter from '../components/trials/NoPreserve3dWithFilter.svelte';
import NoPreserve3dWithClipPath from '../components/trials/NoPreserve3dWithClipPath.svelte';
import NoPreserve3dWithIsolation from '../components/trials/NoPreserve3dWithIsolation.svelte';
import NoPreserve3dWithMaskImage from '../components/trials/NoPreserve3dWithMaskImage.svelte';
import NoPreserve3dWithMaskBorderSource from '../components/trials/NoPreserve3dWithMaskBorderSource.svelte';
import NoPreserve3dWithMixBlend from '../components/trials/NoPreserve3dWithMixBlend.svelte';
import NoPreserve3dWithContainStrict from '../components/trials/NoPreserve3dWithContainStrict.svelte';
import NoPreserve3dWithContainContent from '../components/trials/NoPreserve3dWithContainContent.svelte';
import NoPreserve3dWithContainPaint from '../components/trials/NoPreserve3dWithContainPaint.svelte';
import NoPreserve3dWithContentVisHidden from '../components/trials/NoPreserve3dWithContentVisHidden.svelte';
import NoPreserve3dWithContentVisAuto from '../components/trials/NoPreserve3dWithContentVisAuto.svelte';
import NoPreserve3dWithWillChangeOpacity from '../components/trials/NoPreserve3dWithWillChangeOpacity.svelte';
import NoPreserve3dWithWillChangeFilter from '../components/trials/NoPreserve3dWithWillChangeFilter.svelte';
import NoPreserve3dWithBackdropFilter from '../components/trials/NoPreserve3dWithBackdropFilter.svelte';
import PerspectiveFunc from '../components/trials/PerspectiveFunc.svelte';
import Perspective from '../components/trials/Perspective.svelte';
import PerspectiveOrigin from '../components/trials/PerspectiveOrigin.svelte';

export interface TrialControls {
  getTrialElement: () => HTMLElement;
  getContainers: () => HTMLElement[];
  getACROptions: () => ACROptions;
}

export type TrialComponent = SvelteComponent & TrialControls;

export type Trial = {
  name: TrialName;
  trialType: ComponentType<TrialComponent>;
  trialComponent?: TrialComponent;
};

export const allTrials: Trial[] = [
  { name: TrialName.Control, trialType: Control },
  { name: TrialName.BakePosition, trialType: BakePosition },
  { name: TrialName.KeepInlineTransform, trialType: KeepInlineTransform },
  { name: TrialName.SubPixel, trialType: SubPixel },
  { name: TrialName.Bordered, trialType: Bordered },
  { name: TrialName.BorderedParentRotated, trialType: BorderedParentRotated },
  { name: TrialName.Relative, trialType: Relative },
  { name: TrialName.Absolute, trialType: Absolute },
  { name: TrialName.AbsoluteInTransform, trialType: AbsoluteInTransform },
  { name: TrialName.Fixed, trialType: Fixed },
  { name: TrialName.FixedInTransform, trialType: FixedInTransform },
  { name: TrialName.FixedInFilter, trialType: FixedInFilter },
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
  { name: TrialName.RotationOrigin0UseCenter, trialType: RotationOrigin0UseCenter },
  { name: TrialName.Rotations3d, trialType: Rotations3d },
  { name: TrialName.RotationsPreserve3d, trialType: RotationsPreserve3d },
  { name: TrialName.Rotations3dCountering, trialType: Rotations3dCountering },
  { name: TrialName.RotationsPreserve3dCountering, trialType: RotationsPreserve3dCountering },
  { name: TrialName.Transforms3dComplicated, trialType: Transforms3dComplicated },
  { name: TrialName.TransformsPreserve3dComplicated, trialType: TransformsPreserve3dComplicated },
  { name: TrialName.TwoContainersPreserve3d, trialType: TwoContainersPreserve3d },
  { name: TrialName.OuterContainerPreserve3d, trialType: OuterContainerPreserve3d },
  { name: TrialName.NoPreserve3dWithOverflow, trialType: NoPreserve3dWithOverflow },
  { name: TrialName.NoPreserve3dWithOpacity, trialType: NoPreserve3dWithOpacity },
  { name: TrialName.NoPreserve3dWithFilter, trialType: NoPreserve3dWithFilter },
  { name: TrialName.NoPreserve3dWithClipPath, trialType: NoPreserve3dWithClipPath },
  { name: TrialName.NoPreserve3dWithIsolation, trialType: NoPreserve3dWithIsolation },
  { name: TrialName.NoPreserve3dWithMaskImage, trialType: NoPreserve3dWithMaskImage },
  { name: TrialName.NoPreserve3dWithMaskBorderSource, trialType: NoPreserve3dWithMaskBorderSource },
  { name: TrialName.NoPreserve3dWithMixBlend, trialType: NoPreserve3dWithMixBlend },
  { name: TrialName.NoPreserve3dWithContainStrict, trialType: NoPreserve3dWithContainStrict },
  { name: TrialName.NoPreserve3dWithContainContent, trialType: NoPreserve3dWithContainContent },
  { name: TrialName.NoPreserve3dWithContainPaint, trialType: NoPreserve3dWithContainPaint },
  { name: TrialName.NoPreserve3dWithContentVisHidden, trialType: NoPreserve3dWithContentVisHidden },
  { name: TrialName.NoPreserve3dWithContentVisAuto, trialType: NoPreserve3dWithContentVisAuto },
  {
    name: TrialName.NoPreserve3dWithWillChangeOpacity,
    trialType: NoPreserve3dWithWillChangeOpacity,
  },
  { name: TrialName.NoPreserve3dWithWillChangeFilter, trialType: NoPreserve3dWithWillChangeFilter },
  { name: TrialName.NoPreserve3dWithBackdropFilter, trialType: NoPreserve3dWithBackdropFilter },
  { name: TrialName.PerspectiveFunc, trialType: PerspectiveFunc },
  { name: TrialName.Perspective, trialType: Perspective },
  { name: TrialName.PerspectiveOrigin, trialType: PerspectiveOrigin },
];
export const trialsByName = new Map<TrialName, Trial>(
  allTrials.map((trial) => [trial.name, trial]),
);

export function getTrials(trialNames: string[]): Trial[] {
  return trialNames
    .map((name) => trialsByName.get(name as TrialName))
    .filter((trial) => !!trial) as Trial[];
}
