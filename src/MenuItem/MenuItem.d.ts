import * as React from 'react';
import { StandardProps } from '../index';
import { ListItemProps, ListItemClassKey } from '../List/index';

export interface MenuItemProps extends StandardProps<
  ListItemProps,
  MenuItemClassKey
> {
  component?: string | React.ComponentType<MenuItemProps>;
  role?: string;
  selected?: boolean;
}

export type MenuItemClassKey =
  | ListItemClassKey
  | 'selected'
  ;

declare const MenuItem: React.ComponentType<MenuItemProps>;

export default MenuItem;
