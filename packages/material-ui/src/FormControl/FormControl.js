import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { isFilled, isAdornedStart } from '../Input/Input';
import { capitalize } from '../utils/helpers';
import { isMuiElement } from '../utils/reactHelpers';

export const styles = {
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    // Reset fieldset default style
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
  },
  filled: {
    backgroundColor: '#DCDCDC',
    borderRadius: '4px 4px 0 0',
  },
  outlined: {
    border: '1px solid',
    borderRadius: 4,
    transition: theme.transitions.create('border-color'),
  },
  focused: {},
  outlinedFocused: {
    border: '2px solid',
    borderColor: theme.palette.primary.main,
  },
  marginNormal: {
    marginTop: 16,
    marginBottom: 8,
  },
  marginDense: {
    marginTop: 8,
    marginBottom: 4,
  },
  fullWidth: {
    width: '100%',
  },
};

/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibilty and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *  - FormLabel
 *  - FormHelperText
 *  - Input
 *  - InputLabel
 */
class FormControl extends React.Component {
  constructor(props) {
    super(props);

    // We need to iterate through the children and find the Input in order
    // to fully support server side rendering.
    const { children } = this.props;
    if (children) {
      React.Children.forEach(children, child => {
        if (!isMuiElement(child, ['Input', 'Select', 'NativeSelect'])) {
          return;
        }

        if (isFilled(child.props, true)) {
          this.state.filled = true;
        }

        const input = isMuiElement(child, ['Select', 'NativeSelect']) ? child.props.input : child;

        if (input && isAdornedStart(input.props)) {
          this.state.adornedStart = true;
        }
      });
    }
  }

  state = {
    adornedStart: false,
    filled: false,
    focused: false,
  };

  getChildContext() {
    const { disabled, error, required, margin, variant } = this.props;
    const { adornedStart, filled, focused } = this.state;

    return {
      muiFormControl: {
        adornedStart,
        disabled,
        error,
        filled,
        focused,
        margin,
        onBlur: this.handleBlur,
        onEmpty: this.handleClean,
        onFilled: this.handleDirty,
        onFocus: this.handleFocus,
        required,
        variant,
      },
    };
  }

  handleFocus = () => {
    this.setState(state => (!state.focused ? { focused: true } : null));
  };

  handleBlur = () => {
    this.setState(state => (state.focused ? { focused: false } : null));
  };

  handleDirty = () => {
    if (!this.state.filled) {
      this.setState({ filled: true });
    }
  };

  handleClean = () => {
    if (this.state.filled) {
      this.setState({ filled: false });
    }
  };

  render() {
    const { focused } = this.state;
    const {
      classes,
      className,
      component: Component,
      disabled,
      error,
      fullWidth,
      margin,
      required,
      variant,
      ...other
    } = this.props;

    return (
      <Component
        className={classNames(
          classes.root,
          {
            [classes[`margin${capitalize(margin)}`]]: margin !== 'none',
            [classes.fullWidth]: fullWidth,
            [classes.filled]: variant === 'filled',
            [classes.outlined]: variant === 'outlined',
            [classes.focused]: focused,
            [classes.outlinedFocused]: focused && variant === 'outlined',
          },
          className,
        )}
        {...other}
      />
    );
  }
}

FormControl.propTypes = {
  /**
   * The contents of the form control.
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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: PropTypes.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: PropTypes.bool,
  /**
   * The type of TextField component.
   */
  variant: PropTypes.oneOf(['default', 'filled', 'outlined']),
};

FormControl.defaultProps = {
  component: 'div',
  disabled: false,
  error: false,
  fullWidth: false,
  margin: 'none',
  required: false,
  variant: 'default',
};

FormControl.childContextTypes = {
  muiFormControl: PropTypes.object,
};

export default withStyles(styles, { name: 'MuiFormControl' })(FormControl);
