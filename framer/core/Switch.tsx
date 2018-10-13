import * as React from 'react';
import { PropertyControls, ControlType } from 'framer';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiSwitch from '@material-ui/core/Switch';

// Define type of property
interface Props {
  checkedIcon: React.ReactNode;
  color: 'primary' | 'secondary' | 'default';
  disabled: boolean;
  disableRipple: boolean;
  icon: React.ReactNode;
  onChange: () => void;
  value: string;
  label: string;
  width: number;
  height: number;
  onClick: () => void;
}

export class Switch extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    color: 'secondary',
    disabled: false,
    disableRipple: false,
    label: 'Switch',
    width: 100,
    height: 56,
  };

  // Items shown in property panel
  static propertyControls: PropertyControls<Props> = {
      checkedIcon: {
        type: ControlType.Node,
        title: 'CheckedIcon',
      },
      color: {
        type: ControlType.Enum,
        title: 'Color',
      options: ['primary', 'secondary', 'default'],
      },
      disabled: {
        type: ControlType.Boolean,
        title: 'Disabled',
      },
      disableRipple: {
        type: ControlType.Boolean,
        title: 'DisableRipple',
      },
      icon: {
        type: ControlType.Node,
        title: 'Icon',
      },
      onChange: {
        type: ControlType.Func,
        title: 'OnChange',
      },
      value: {
        type: ControlType.String,
        title: 'Value',
      },
      label: {
        type: ControlType.String,
        title: 'Label',
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

  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    const { height, label, width, ...other } = this.props;

    return (
<FormControlLabel
        control={<MuiSwitch checked={this.state.checked} onChange={this.handleChange} {...other} />}
        label={label}
        style={{
          width,
          height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
        }}
      />
    );
  }
}
