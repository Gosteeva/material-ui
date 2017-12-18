import * as React from 'react';
import { StandardProps } from '../index';
import { PaperProps } from '../Paper/index';
import { PaperClassKey } from '../Paper/Paper';

export interface SnackbarContentProps extends StandardProps<
  PaperProps,
  SnackbarContentClassKey
> {
  action?: React.ReactElement<any>;
  message: React.ReactElement<any> | string;
}

export type SnackbarContentClassKey =
  | PaperClassKey
  | 'message'
  | 'action'
  ;

declare const SnackbarContent: React.ComponentType<SnackbarContentProps>;

export default SnackbarContent;
