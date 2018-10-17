import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import * as Icons from '@material-ui/icons';

// Define type of property
interface Props {
  color: 'inherit' | 'primary' | 'secondary' | 'action' | 'error' | 'disabled';
  icon: string;
  theme: 'Filled' | 'Outlined' | 'Rounded' | 'TwoTone' | 'Sharp';
  width: number;
  height: number;
  onClick: () => void;
}

export class Icon extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    color: 'inherit',
    icon: 'Add',
    theme: 'Filled',
    width: 24,
    height: 24,
  };

  // Items shown in property panel
  static propertyControls: PropertyControls<Props> = {
    color: {
      type: ControlType.Enum,
      title: 'Color',
      options: ['inherit', 'primary', 'secondary', 'action', 'error', 'disabled'],
    },
    icon: {
      type: ControlType.String,
      title: 'Icon',
    },
    theme: {
      type: ControlType.Enum,
      title: 'Theme',
      options: ['Filled', 'Outlined', 'Rounded', 'TwoTone', 'Sharp'],
    },
  };

  static capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.substr(1);
  }

  render() {
    const { height, icon: iconProp, theme, width, ...other } = this.props;
    const IconProp = this.capitalize(iconProp);
    const icon = Object.keys(Icons).includes(IconProp) ? IconProp : 'Add';
    const Icon = Icons[`${icon}${theme === 'Filled' ? '' : theme}`];
    return <Icon style={{ width, height}} {...other} />;
  }
}
