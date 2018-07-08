import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
// import InputLabel from '../InputLabel';

export const styles = theme => {
  return {
    root: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      // height: '100%',
    },
    svg: {},
    path: {
      strokeDasharray: 10000,
      stroke: theme.palette.grey[400],
      // '&:hover': {
      //   stroke: theme.palette.grey[900],
      // },
    },
    pathMounted: {
      transition: theme.transitions.create(['stroke', 'stroke-dashoffset', 'stroke-width'], {
        duration: theme.transitions.duration.shorter,
      }),
    },
    hiddenLabel: {
      position: 'absolute',
      visibility: 'hidden',
      height: 'auto',
      width: 'auto',
      whiteSpace: 'nowrap',
    },
    focused: {
      stroke: theme.palette.primary.main,
    },
    error: {
      stroke: theme.palette.error.main,
    },
    disabled: {
      stroke: theme.palette.grey[400],
    },
  };
};

class Outline extends React.Component {
  labelRef = React.createRef();

  state = {
    gapWidth: 0,
    mounted: false,
  };

  // componentDidMount() {
  //   if (this.labelRef.current) {
  //     // eslint-disable-next-line react/no-did-mount-set-state
  //     this.setState({
  //       gapWidth: (ReactDOM.findDOMNode(this.labelRef.current).clientWidth + 8) * 0.75,
  //     });
  //   }
  // }

  render() {
    const {
      borderRadius: br,
      // borderColor: borderColorProp,
      classes,
      className: classNameProp,
      height: heightProp,
      labelRef,
      open: openProp,
      // strokeWidth,
      theme,
      width: widthProp,
      ...other
    } = this.props;

    const { muiFormControl } = this.context;

    let open = openProp;
    if (typeof open === 'undefined' && muiFormControl) {
      open = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
    }

    const strokeWidth = muiFormControl.focused ? 2 : 1;
    const width = widthProp - strokeWidth;
    const height = heightProp - strokeWidth;
    const br2 = br * 2;
    const hsw = strokeWidth / 2;
    const { gapWidth } = this.state;
    // const gapWidth = (ReactDOM.findDOMNode(labelRef.current).clientWidth + 8) * 0.75;

    const className = classNames(classes.root, classNameProp);

    const pathClassName = classNames(classes.path, {
      [classes.error]: muiFormControl.error,
      // [classes.fullWidth]: fullWidth,
      // [classes.focused]: this.state.focused,
      // [classes.formControlVariant]: filled || outlined,
      [classes.focused]: muiFormControl.focused,
      // [classes.multiline]: multiline,
      [classes.disabled]: muiFormControl.disable,
      [classes.pathMounted]: this.state.mounted,
    });

    return (
      <div className={className} {...other}>
        <svg className={classes.outline}>
          {/* Rounded rectangle without top */}
          <path
            d={`
          M ${width - br + hsw} ${hsw}
          a ${br} ${br} 0 0 1 ${br} ${br}
          l 0 ${height - br2}
          a ${br} ${br} 0 0 1 -${br} ${br}
          l -${width - br2} 0
          a ${br} ${br} 0 0 1 -${br} -${br}
          l 0 -${height - br2}
          a ${br} ${br} 0 0 1 ${br} -${br}
        `}
            strokeWidth={`${strokeWidth}px`}
            strokeLinecap="square"
            fill="transparent"
            className={pathClassName}
          />
          {/* Top of outline - left side */}
          <path
            d={`
          M${br + strokeWidth / 2} ${hsw}
          l ${10 - br + gapWidth / 2} 0
       `}
            strokeWidth={`${strokeWidth}px`}
            strokeDashoffset={10000 - 8 + br - (open ? 0 : gapWidth / 2)}
            fill="transparent"
            className={pathClassName}
          />
          {/* Top of outline - right side */}
          <path
            d={`
          M ${width - br + hsw} ${hsw}
          l -${width - 8 - br - gapWidth / 2} 0
       `}
            strokeWidth={`${strokeWidth}px`}
            strokeDashoffset={10000 - widthProp + 2 + br + gapWidth / (open ? 1 : 2)}
            fill="transparent"
            className={pathClassName}
          />
        </svg>
      </div>
    );
  }
}

Outline.propTypes = {
  /**
   * The radius of the border corner.
   */
  borderRadius: PropTypes.number,
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Width of the gap when open.
   */
  gapWidth: PropTypes.number,
  /**
   * Height of the outline.
   */
  height: PropTypes.number,
  /**
   * Used to determined the gap width.
   */
  labelRef: PropTypes.func,
  /**
   * If true, the gap is open. This is normally obtained via context from
   * FormControl.
   */
  open: PropTypes.bool,
  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,
  /**
   * Width of the outline.
   */
  width: PropTypes.number,
};

Outline.defaultProps = {
  borderRadius: 4,
  gapWidth: 0,
  height: 48,
  width: 250,
};

Outline.contextTypes = {
  muiFormControl: PropTypes.object,
};

export default withStyles(styles, { name: 'MuiOutline', withTheme: true })(Outline);
