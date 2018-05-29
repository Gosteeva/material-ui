// @inheritedComponent FormControl

import React from 'react';
import warning from 'warning';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Input from '../Input';
import InputLabel from '../InputLabel';
import FormControl from '../FormControl';
import FormHelperText from '../FormHelperText';
import Select from '../Select';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  filledFormControl: {
    backgroundColor: '#DCDCDC',
    borderRadius: '4px 4px 0 0',
  },
  outlinedFormControl: {
    border: '1px solid',
    borderRadius: 4,
    transition: theme.transitions.create('border-color', {
      duration: theme.transitions.duration.shorter,
    }),
  },
  outlinedFormControlFocused: {
    border: '1px solid',
    borderColor: theme.palette.primary.main,
  },
  inputLabelFormControl: {
    position: 'absolute',
    left: 12,
    top: 8,
    transform: 'translate(0, 20px) scale(1)',
  },
  outlinedInputLabelFormControl: {
    position: 'absolute',
    left: 12,
    top: -8,
    transform: 'translate(0, 28px) scale(1)',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900],
    padding: '0 4px',
    margin: '0 -4px',
  },
  // Duplicated from InputLabel to control sheet order
  outlinedInputLabelShrink: {
    transform: 'translate(0, 1.5px) scale(0.75)',
    transformOrigin: 'top left',
  },
  formHelperTextRoot: {
    padding: '0 12px',
  },
  inputMultiline: {
    padding: `${theme.spacing.unit + 2}px ${theme.spacing.unit + 4}px ${theme.spacing.unit + 2}px`,
  },
  inputInput: {
    padding: `${theme.spacing.unit + 2}px ${theme.spacing.unit + 4}px ${theme.spacing.unit + 2}px`,
  },
  outlinedInputInput: {
    padding: '4px 12px 16px',
  },
});

/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 * - [FormControl](/api/form-control)
 * - [InputLabel](/api/input-label)
 * - [Input](/api/input)
 * - [FormHelperText](/api/form-helper-text)
 *
 * If you wish to alter the properties applied to the native input, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */
function TextField(props) {
  const {
    autoComplete,
    autoFocus,
    children,
    classes,
    className: classNameProp,
    defaultValue,
    disabled,
    error,
    FormHelperTextProps: FormHelperTextPropsProp,
    fullWidth,
    helperText,
    id,
    InputLabelProps: InputLabelPropsProp,
    inputProps,
    InputProps: InputPropsProp,
    inputRef,
    label,
    multiline,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required,
    rows,
    rowsMax,
    select,
    SelectProps,
    type,
    value,
    variant,
    ...other
  } = props;

  const InputLabelProps = {
    classes:
      variant === 'outlined'
        ? {
            formControl: classes.outlinedInputLabelFormControl,
            shrink: classes.outlinedInputLabelShrink,
          }
        : {
            formControl: classes.inputLabelFormControl,
            shrink: classes.outlinedInputLabelShrink,
          },
    ...InputLabelPropsProp,
  };

  const InputProps = {
    disableUnderline: variant === 'outlined' ? true : undefined,
    classes:
      variant === 'outlined'
        ? {
            input: classes.outlinedInputInput,
          }
        : undefined,
    // multiline: classes.inputMultiline,
    // input: classes.inputInput,
    ...InputPropsProp,
  };

  const FormHelperTextProps = {
    className: classes.formHelperTextRoot,
    ...FormHelperTextPropsProp,
  };

  warning(
    !select || Boolean(children),
    'Material-UI: `children` must be passed when using the `TextField` component with `select`.',
  );

  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const InputElement = (
    <Input
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      defaultValue={defaultValue}
      disabled={disabled}
      fullWidth={fullWidth}
      multiline={multiline}
      name={name}
      rows={rows}
      rowsMax={rowsMax}
      type={type}
      value={value}
      id={id}
      inputRef={inputRef}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      inputProps={inputProps}
      {...InputProps}
    />
  );

  const outlined = variant === 'outlined';

  const className = classNames(
    {
      [classes.filledFormControl]: variant === 'filled',
      [classes.outlinedFormControl]: outlined,
    },
    classNameProp,
  );

  const formControlClasses = {
    focused: outlined ? classes.outlinedFormControlFocused : undefined,
  };

  return (
    <FormControl
      aria-describedby={helperTextId}
      classes={formControlClasses}
      className={className}
      error={error}
      fullWidth={fullWidth}
      required={required}
      variant={variant}
      {...other}
    >
      {label && (
        <InputLabel htmlFor={id} {...InputLabelProps}>
          {label}
        </InputLabel>
      )}
      {select ? (
        <Select value={value} input={InputElement} {...SelectProps}>
          {children}
        </Select>
      ) : (
        InputElement
      )}
      {helperText && (
        <FormHelperText id={helperTextId} {...FormHelperTextProps}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
}

TextField.propTypes = {
  /**
   * This property helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it here:
   * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
   */
  autoComplete: PropTypes.string,
  /**
   * If `true`, the input will be focused during the first mount.
   */
  autoFocus: PropTypes.bool,
  /**
   * @ignore
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
   * The default value of the `Input` element.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * If `true`, the input will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: PropTypes.bool,
  /**
   * Properties applied to the `FormHelperText` element.
   */
  FormHelperTextProps: PropTypes.object,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The helper text content.
   */
  helperText: PropTypes.node,
  /**
   * The id of the `input` element.
   * Use that property to make `label` and `helperText` accessible for screen readers.
   */
  id: PropTypes.string,
  /**
   * Properties applied to the `InputLabel` element.
   */
  InputLabelProps: PropTypes.object,
  /**
   * Properties applied to the `Input` element.
   */
  InputProps: PropTypes.object,
  /**
   * Attributes applied to the native `input` element.
   */
  inputProps: PropTypes.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
  /**
   * If `true`, a textarea element will be rendered instead of an input.
   */
  multiline: PropTypes.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: PropTypes.string,
  /**
   * If `true`, the label is displayed as required.
   */
  required: PropTypes.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Render a `Select` element while passing the `Input` element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   */
  select: PropTypes.bool,
  /**
   * Properties applied to the `Select` element.
   */
  SelectProps: PropTypes.object,
  /**
   * Type attribute of the `Input` element. It should be a valid HTML5 input type.
   */
  type: PropTypes.string,
  /**
   * The value of the `Input` element, required for a controlled component.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),
  /**
   * The type of TextField;
   */
  variant: PropTypes.oneOf(['normal', 'filled', 'outlined']),
};

TextField.defaultProps = {
  required: false,
  select: false,
  variant: 'normal',
};

export default withStyles(styles, { name: 'MuiTextField' })(TextField);
