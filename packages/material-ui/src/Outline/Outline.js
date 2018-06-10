import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';

export const styles = theme => {
  return {
    root: {},
    path: {
      transition: theme.transitions.create(['stroke-dashoffset', 'stroke-width'], {
        duration: theme.transitions.duration.short,
      }),
      strokeDasharray: 10000,
    },
  };
};

function Outline(props) {
  const {
    borderRadius: br,
    classes,
    className: classNameProp,
    gapWidth,
    height: heightProp,
    open,
    strokeWidth,
    theme,
    width: widthProp,
    ...other
  } = props;

  const className = classNames(classes.root, classNameProp);

  const width = widthProp - strokeWidth;
  const height = heightProp - strokeWidth;
  const br2 = br * 2;
  const hsw = strokeWidth / 2;

  return (
    <svg className={className} width={widthProp} height={heightProp} {...other}>
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
        stroke={theme.palette.primary.main}
        strokeWidth={`${strokeWidth}px`}
        strokeLinecap="square"
        fill="transparent"
        className={classes.path}
      />
      {/* Top of rectangle - left side */}
      <path
        d={`
          M${br + strokeWidth / 2} ${hsw}
          l ${10 - br + gapWidth / 2} 0
       `}
        stroke={theme.palette.primary.main}
        strokeWidth={`${strokeWidth}px`}
        strokeDashoffset={10000 - 10 + br - (open ? 0 : gapWidth / 2)}
        fill="transparent"
        className={classes.path}
      />
      {/* Top of rectangle - right side */}
      <path
        d={`
          M ${width - br + hsw} ${hsw}
          l -${width - 10 - br - gapWidth / 2} 0
       `}
        stroke={theme.palette.primary.main}
        strokeWidth={`${strokeWidth}px`}
        strokeDashoffset={10000 - widthProp + br + gapWidth / (open ? 1 : 2)}
        fill="transparent"
        className={classes.path}
      />
    </svg>
  );
}

Outline.propTypes = {
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
   * If true, the gap is open.
   */
  open: PropTypes.bool,
  /**
   * Thickness of the outline.
   */
  strokeWidth: PropTypes.number,
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
  height: 56,
  open: false,
  strokeWidth: 2,
  width: 250,
};

export default withStyles(styles, { name: 'MuiOutline', withTheme: true })(Outline);
