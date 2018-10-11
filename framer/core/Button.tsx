import * as React from 'react';
import { PropertyControls, ControlType } from 'framer';
import Mui from '@material-ui/core/';

// Define type of property
interface Props {
  children: React.ReactNode;
  color: 'default' | 'inherit' | 'primary' | 'secondary';
  disabled: boolean;
  disableFocusRipple: boolean;
  disableRipple: boolean;
  href: string;
  mini: boolean;
  size: 'small' | 'medium' | 'large';
  variant: 'text' | 'flat' | 'outlined' | 'contained' | 'raised' | 'fab' | 'extendedFab';
  label: string;
  height: number;
  onClick: () => void;
}

export class Button extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    color: 'default',
    disabled: false,
    disableFocusRipple: false,
    mini: false,
    size: 'medium',
    variant: 'text',
    label: 'Button',
    height: 38,
  };

  // Items shown in property panel
  static propertyControls: PropertyControls<Props> = {
      children: {
        type: ControlType.Node,
        title: 'Children',
      },
      color: {
        type: ControlType.Enum,
        title: 'Color',
      options: ['default', 'inherit', 'primary', 'secondary'],
      },
      disabled: {
        type: ControlType.Boolean,
        title: 'Disabled',
      },
      disableFocusRipple: {
        type: ControlType.Boolean,
        title: 'DisableFocusRipple',
      },
      disableRipple: {
        type: ControlType.Boolean,
        title: 'DisableRipple',
      },
      href: {
        type: ControlType.String,
        title: 'Href',
      },
      mini: {
        type: ControlType.Boolean,
        title: 'Mini',
      },
      size: {
        type: ControlType.Enum,
        title: 'Size',
      options: ['small', 'medium', 'large'],
      },
      variant: {
        type: ControlType.Enum,
        title: 'Variant',
      options: ['text', 'flat', 'outlined', 'contained', 'raised', 'fab', 'extendedFab'],
      },
      label: {
        type: ControlType.String,
        title: 'Label',
      },
      height: {
        type: ControlType.Number,
        title: 'Height',
      },
  };

  render() {
    const { height, label, width, ...other } = this.props;

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
        <Mui {...other}>{label}</Mui>
      </div>
    );
  }
}
