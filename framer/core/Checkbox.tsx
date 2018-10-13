import * as React from 'react';
import { PropertyControls, ControlType } from 'framer';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiCheckbox from '@material-ui/core/Checkbox';

// Define type of property
interface Props {
  color: 'primary' | 'secondary' | 'default';
  disabled: boolean;
  disableRipple: boolean;
  indeterminate: boolean;
  onChange: () => void;
  value: string;
  label: string;
  width: number;
  height: number;
  onClick: () => void;
}

export class Checkbox extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    color: 'secondary',
    indeterminate: false,
    label: 'Checkbox',
    width: 100,
    height: 56,
  };

  // Items shown in property panel
  static propertyControls: PropertyControls<Props> = {
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
      indeterminate: {
        type: ControlType.Boolean,
        title: 'Indeterminate',
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
        control={<MuiCheckbox checked={this.state.checked} onChange={this.handleChange} {...other} />}
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
