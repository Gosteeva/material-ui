import * as React from 'react';
import { StandardProps } from '../index';
import { Orientation } from '../Stepper/Stepper';
import { ButtonBaseProps, ButtonBaseClassKey } from '../ButtonBase/index';

export type StepButtonIcon = React.ReactElement<any> | string | number;

export interface StepButtonProps extends StandardProps<
  ButtonBaseProps,
  StepButtonClasskey
> {
  active?: boolean;
  alternativeLabel?: boolean;
  children: React.ReactElement<any>;
  completed?: boolean;
  disabled?: boolean;
  icon?: StepButtonIcon;
  last?: boolean;
  optional?: React.ReactNode;
  orientation: Orientation;
}

export type StepButtonClasskey =
  | ButtonBaseClassKey
  | 'root'
  | 'alternativeLabel'
  ;

declare const StepButton: React.ComponentType<StepButtonProps>;

export default StepButton;
