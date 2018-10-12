import * as React from 'react';
import { PropertyControls, ControlType } from 'framer';
import MuiTextField from '@material-ui/core/TextField';

// Define type of property
interface Props {
  autoComplete: string;
  autoFocus: boolean;
  defaultValue: undefined | undefined;
  disabled: boolean;
  error: boolean;
  fullWidth: boolean;
  helperText: React.ReactNode;
  label: string;
  margin: 'none' | 'dense' | 'normal';
  multiline: boolean;
  onChange: () => void;
  placeholder: string;
  required: boolean;
  select: boolean;
  type: string;
  variant: 'standard' | 'outlined' | 'filled';
  width: number;
  height: number;
  onClick: () => void;
}

export class TextField extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    autoFocus: false,
    disabled: false,
    error: false,
    fullWidth: false,
    label: 'TextField',
    required: false,
    select: false,
    variant: 'standard',
    width: 100,
    height: 38,
  };

  // Items shown in property panel
  static propertyControls: PropertyControls<Props> = {
      autoComplete: {
        type: ControlType.String,
        title: 'AutoComplete',
      },
      autoFocus: {
        type: ControlType.Boolean,
        title: 'AutoFocus',
      },
      defaultValue: {
        type: ControlType.Union,
        title: 'DefaultValue',
      options: [undefined, undefined],
      },
      disabled: {
        type: ControlType.Boolean,
        title: 'Disabled',
      },
      error: {
        type: ControlType.Boolean,
        title: 'Error',
      },
      fullWidth: {
        type: ControlType.Boolean,
        title: 'FullWidth',
      },
      helperText: {
        type: ControlType.Node,
        title: 'HelperText',
      },
      label: {
        type: ControlType.String,
        title: 'Label',
      },
      margin: {
        type: ControlType.Enum,
        title: 'Margin',
      options: ['none', 'dense', 'normal'],
      },
      multiline: {
        type: ControlType.Boolean,
        title: 'Multiline',
      },
      onChange: {
        type: ControlType.Func,
        title: 'OnChange',
      },
      placeholder: {
        type: ControlType.String,
        title: 'Placeholder',
      },
      required: {
        type: ControlType.Boolean,
        title: 'Required',
      },
      select: {
        type: ControlType.Boolean,
        title: 'Select',
      },
      type: {
        type: ControlType.String,
        title: 'Type',
      },
      variant: {
        type: ControlType.Enum,
        title: 'Variant',
      options: ['standard', 'outlined', 'filled'],
      },
      width: {
        type: ControlType.Number,
        title: 'Width',
      },
      height: {
        type: ControlType.Number,
        title: 'Height',
      },
  };

  render() {
    const { height, width, ...other } = this.props;

    return (
      <div
        style={{
          width,
          height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <MuiTextField {...other} />
      </div>
    );
  }
}
