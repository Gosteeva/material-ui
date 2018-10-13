import * as React from 'react';
import { PropertyControls, ControlType } from 'framer';
import MuiPaper from '@material-ui/core/Paper';

// Define type of property
interface Props {
  children: React.ReactNode;
  elevation: number;
  square: boolean;
  width: number;
  height: number;
}

export class Paper extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    elevation: 2,
    square: false,
    width: 100,
    height: 100,
  };

  // Items shown in property panel
  static propertyControls: PropertyControls<Props> = {
    elevation: {
      type: ControlType.Number,
      title: 'Elevation',
    },
    square: {
      type: ControlType.Boolean,
      title: 'Square',
    },
  };

  render() {
    const { children, width, height, ...other } = this.props;

    return (
      <MuiPaper
        style={{
          width,
          height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        {...other}
      >
        {children}
      </MuiPaper>
    );
  }
}
