import * as React from 'react';
import { StandardProps, PropTypes } from '..';
import { ButtonBaseProps, ButtonBaseClassKey } from '../ButtonBase';

export interface ButtonProps extends StandardProps<
  ButtonBaseProps,
  ButtonClassKey,
  'component'
> {
  color?: PropTypes.Color | 'contrast';
  component?: string | React.ComponentType<ButtonProps>;
  disabled?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  fab?: boolean;
  href?: string;
  raised?: boolean;
  size?: string;
  type?: string;
}

export type ButtonClassKey =
  | ButtonBaseClassKey
  | 'small'
  | 'label'
  | 'flatPrimary'
  | 'flatAccent'
  | 'flatContrast'
  | 'colorInherit'
  | 'raised'
  | 'keyboardFocused'
  | 'raisedPrimary'
  | 'raisedAccent'
  | 'raisedContrast'
  | 'fab'
  | 'smallFab'
  ;

declare const Button: React.ComponentType<ButtonProps>;

export default Button
