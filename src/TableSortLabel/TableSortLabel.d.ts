import * as React from 'react';
import { StandardProps } from '../index';
import { ButtonBaseProps, ButtonBaseClassKey } from '../ButtonBase/index';

export interface TableSortLabelProps extends StandardProps<
  ButtonBaseProps,
  TableSortLabelClassKey
> {
  active?: boolean;
  direction?: 'asc' | 'desc';
}

export type TableSortLabelClassKey =
  | ButtonBaseClassKey
  | 'active'
  | 'icon'
  | 'desc'
  | 'asc'
  ;

declare const TableSortLabel: React.ComponentType<TableSortLabelProps>;

export default TableSortLabel;
