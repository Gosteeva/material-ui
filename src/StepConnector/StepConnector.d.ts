import * as React from 'react';
import { StandardProps } from '../index';
import { Orientation } from '../Stepper/Stepper';

export type StepConnectorIcon = React.ReactElement<any> | string | number;

export interface StepConnectorProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  StepConnectorClasskey
> {
  alternativeLabel?: boolean,
  orientation?: Orientation,
}

export type StepConnectorClasskey =
  | 'root'
  | 'alternativeLabel'
  ;

declare const StepConnector: React.ComponentType<StepConnectorProps>;

export default StepConnector;
