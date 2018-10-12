export const componentSettings = {
  all: { ignoredProps: ['classes', 'className', 'component', 'id', 'name', '.*Props', '.*Ref'] },
  Button: {
    ignoredProps: ['disableFocusRipple'],
    propValues: {
      label: '\'Button\'',
      width: 100,
      height: 38,
    },
    template: 'label_as_children.txt',
  },
  TextField: {
    // FIXME: defaultValue - fix `Union`
    ignoredProps: ['autoComplete', 'defaultValue', 'rows', 'rowsMax', 'value'],
    propValues: {
      label: '\'TextField\'',
      width: 280,
      height: 56,
      fullWidth: true,
    },
    template: 'self_closing.txt',
  },
};

export const additionalProps = (component) => {
  const templates = {
    fullWidth: {
      type: { name: 'boolean' },
      required: false,
      description: 'FullWidth',
      defaultValue: { value: componentSettings[component].propValues.fullWidth },
    },
    height: {
      type: { name: 'number' },
      required: false,
      description: 'Height',
      defaultValue: { value: componentSettings[component].propValues.height },
    },
    label: {
      type: { name: 'string' },
      required: false,
      description: 'Label',
      defaultValue: { value: componentSettings[component].propValues.label },
    },
    width: {
      type: { name: 'number' },
      required: false,
      description: 'Width',
      defaultValue: { value: componentSettings[component].propValues.width },
    },
  };

  // The props this component has default values for
  const propNames = Object.keys(componentSettings[component].propValues);

  const reducer = (accumulator, currentValue) => {
    accumulator[currentValue] = templates[currentValue];
    return accumulator;
  };

  return propNames.reduce(reducer, {});
};
