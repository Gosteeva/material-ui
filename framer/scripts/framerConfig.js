export const componentSettings = {
  all: { ignoredProps: ['classes', 'className', 'component', 'id', 'name', '.*Props', '.*Ref'] },
  Avatar: {
    ignoredProps: ['alt', 'imgProps', 'sizes', 'src', 'srcSet'],
    propValues: {
      icon: '\'face\'',
      label: '\'MB\'',
      width: 40,
      height: 40,
    },
    template: 'avatar.txt',
  },
  Button: {
    ignoredProps: ['disableFocusRipple'],
    propValues: {
      label: '\'Button\'',
      width: 100,
      height: 38,
    },
    template: 'label_as_children.txt',
  },
  Checkbox: {
    ignoredProps: ['checked', 'checkedIcon', 'icon', 'indeterminateIcon', 'type'],
    propValues: {
      label: '\'Checkbox\'',
      width: 100,
      height: 56,
    },
    template: 'selection_control.txt',
  },
  Chip: {
    ignoredProps: ['children', 'onDelete'],
    propValues: {
      avatar: 'false',
      clickable: true,
      deletable: false,
      deleteIcon: '\'\'',
      icon: '\'\'',
      label: '\'Chip\'',
      width: 100,
      height: 32,
    },
    template: 'chip.txt',
  },
  Icon: {
    ignoredProps: ['children', 'fontSize'],
    propValues: {
      icon: '\'add\'',
      theme: 'Filled',
      width: 24,
      height: 24,
    },
    template: 'icon.txt',
  },
  Paper: {
    ignoredProps: [],
    propValues: {
      width: 100,
      height: 100,
      elevation: 2,
    },
    template: 'unwrapped_children.txt',
  },
  Radio: {
    ignoredProps: ['checked', 'type'],
    propValues: {
      label: '\'Radio\'',
      width: '\'100%\'',
      height: 48,
    },
    template: 'selection_control.txt',
  },
  RadioGroup: {
    ignoredProps: ['children', 'value'],
    propValues: {
      label: '\'Radio group\'',
      radioLabel1: '\'Radio 1\'',
      radioLabel2: '\'Radio 2\'',
      radioLabel3: '',
      radioLabel4: '',
      radioLabel5: '',
      radioLabel6: '',
      radioLabel7: '',
      radioLabel8: '',
      radioLabel9: '',
      radioLabel10: '',
      width: 200,
      height: 200,
    },
    template: 'radio_group.txt',
  },
  Switch: {
    ignoredProps: ['checked', 'type'],
    propValues: {
      label: '\'Switch\'',
      width: 100,
      height: 56,
    },
    template: 'selection_control.txt',
  },
  Typography: {
    ignoredProps: ['children', 'internalDeprecatedVariant'],
    propValues: {
      label: '\'Typography\'',
      width: 100,
      height: 38,
    },
    template: 'label_as_children.txt',
  },
  MuiThemeProvider: {
    ignoredProps: ['disableStylesGeneration', 'options', 'sheetsManager', 'theme'],
    propValues: {
      paletteType: 'light',
      primary: '\'#3f51b5\'',
      secondary: '\'#f50057\'',
      error: '\'#f44336\'',
    },
    template: 'theme_provider.txt',
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
    avatar: {
      type: { name: 'boolean' },
      description: 'Chip - wrap icon in an Avatar',
      defaultValue: { value: componentSettings[component].propValues.avatar },
    },
    clickable: {
      type: { name: 'boolean' },
      description: 'Chip - clickable (change default to `true`)',
      defaultValue: { value: componentSettings[component].propValues.clickable },
    },
    deletable: {
      type: { name: 'boolean' },
      description: 'Chip - deletable',
      defaultValue: { value: componentSettings[component].propValues.deletable },
    },
    deleteIcon: {
      type: { name: 'string' },
      defaultValue: { value: componentSettings[component].propValues.icon },
    },
    elevation: {
      type: { name: 'number', min: 0, max: 24 },
      defaultValue: { value: componentSettings[component].propValues.elevation },
    },
    error: {
      type: { name: 'color' },
      defaultValue: { value: componentSettings[component].propValues.error },
    },
    fullWidth: {
      type: { name: 'boolean' },
      description: 'TextField - fullWidth',
      defaultValue: { value: componentSettings[component].propValues.fullWidth },
    },
    height: {
      type: { name: 'number' },
      defaultValue: { value: componentSettings[component].propValues.height },
    },
    icon: {
      type: { name: 'string' },
      defaultValue: { value: componentSettings[component].propValues.icon },
    },
    label: {
      type: { name: 'string' },
      defaultValue: { value: componentSettings[component].propValues.label },
    },
    radioLabel1: {
      type: { name: 'string' },
      defaultValue: { value: componentSettings[component].propValues.radioLabel1 },
    },
    radioLabel2: {
      type: {
        name: 'string',
        hidden(props) {
          return props.radioLabel1 === '';
        },
      },
      defaultValue: { value: componentSettings[component].propValues.radioLabel2 },
    },
    radioLabel3: {
      type: {
        name: 'string',
        hidden(props) {
          return props.radioLabel2 === '';
        },
      },
      defaultValue: { value: '\'\'' },
    },
    radioLabel4: {
      type: {
        name: 'string',
        hidden(props) {
          return props.radioLabel3 === '';
        },
      },
      defaultValue: { value: '\'\'' },
    },
    radioLabel5: {
      type: {
        name: 'string',
        hidden(props) {
          return props.radioLabel4 === '';
        },
      },
      defaultValue: { value: '\'\'' },
    },
    radioLabel6: {
      type: {
        name: 'string',
        hidden(props) {
          return props.radioLabel5 === '';
        },
      },
      defaultValue: { value: '\'\'' },
    },
    radioLabel7: {
      type: {
        name: 'string',
        hidden(props) {
          return props.radioLabel6 === '';
        },
      },
      defaultValue: { value: '\'\'' },
    },
    radioLabel8: {
      type: {
        name: 'string',
        hidden(props) {
          return props.radioLabel7 === '';
        },
      },
      defaultValue: { value: '\'\'' },
    },
    radioLabel9: {
      type: {
        name: 'string',
        hidden(props) {
          return props.radioLabel8 === '';
        },
      },
      defaultValue: { value: '\'\'' },
    },
    radioLabel10: {
      type: {
        name: 'string',
        hidden(props) {
          return props.radioLabel9 === '';
        },
      },
      defaultValue: { value: '\'\'' },
    },
    paletteType: {
      type: { name: 'segmentedEnum', value: [{ value: '\'dark\'' }, { value: '\'light\'' }] },
      description: 'Theme palette type',
      defaultValue: { value: '\'light\'' },
    },
    primary: {
      type: { name: 'color' },
      defaultValue: { value: componentSettings[component].propValues.primary },
    },
    secondary: {
      type: { name: 'color' },
      defaultValue: { value: componentSettings[component].propValues.secondary },
    },
    theme: {
      type: {
        name: 'Enum',
        value: [
          { value: '\'Filled\'' },
          { value: '\'Outlined\'' },
          { value: '\'Rounded\'' },
          { value: '\'TwoTone\'' },
          { value: '\'Sharp\'' },
          ],
      },
      description: 'Icon theme',
      defaultValue: { value: '\'Filled\'' },
    },
    width: {
      type: { name: 'number' },
      defaultValue: { value: componentSettings[component].propValues.width },
    },
  };

  // The props this component has default values for
  const propNames = Object.keys(componentSettings[component].propValues);

  const reducer = (additionalPropsObj, propName) => {
    additionalPropsObj[propName] = templates[propName];
    return additionalPropsObj;
  };

  return propNames.reduce(reducer, {});
};
