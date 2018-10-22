export const componentSettings = {
  all: { ignoredProps: ['classes', 'className', 'component', 'id', 'name', '.*Props', '.*Ref'] },
  Avatar: {
    ignoredProps: ['alt', 'imgProps', 'sizes', 'src', 'srcSet'],
    propValues: {
      backgroundColor: '\'#bdbdbd\'',
      color: '\'#fafafa\'',
      icon: '\'face\'',
      imageFile: '\'\'',
      imageUrl: '\'\'',
      label: '\'MB\'',
      width: 40,
      height: 40,
    },
    template: 'avatar.txt',
  },
  Badge: {
    ignoredProps: ['children', 'color', 'disableFocusRipple'],
    propValues: {
      icon: '\'\'',
      theme: 'Filled',
      badgeContent: '\'8\'',
      badgeColor: '\'primary\'',
      width: 22,
      height: 22,
    },
    template: 'badge.txt',
  },
  Button: {
    ignoredProps: ['disableFocusRipple'],
    propValues: {
      icon: '\'\'',
      theme: 'Filled',
      label: '\'Button\'',
      width: 100,
      height: 38,
    },
    template: 'button.txt',
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
      theme: 'Filled',
      label: '\'Chip\'',
      width: 100,
      height: 32,
    },
    template: 'chip.txt',
  },
  CircularProgress: {
    ignoredProps: [],
    propValues: {
      width: 44,
      height: 44,
      thickness: 4,
      progressValue: 50,
    },
    template: 'self_closing.txt',
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
  IconButton: {
    ignoredProps: [],
    propValues: {
      icon: '\'favorite\'',
      badgeContent: '\'\'',
      badgeColor: '\'default\'',
      width: 48,
      height: 48,
    },
    template: 'icon_button.txt',
  },
  LinearProgress: {
    ignoredProps: [],
    propValues: {
      width: '\'100%\'',
      height: 5,
      // thickness: 4,
      progressValue: 50,
      valueBuffer: 75,
    },
    template: 'unwrapped_self_closing.txt',
  },
  Paper: {
    ignoredProps: [],
    propValues: {
      width: 100,
      height: 100,
      elevation: 2,
    },
    template: 'children.txt',
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
      itemLabel1: '\'Radio 1\'',
      itemLabel2: '\'Radio 2\'',
      itemLabel3: '',
      itemLabel4: '',
      itemLabel5: '',
      itemLabel6: '',
      itemitemLabel7: '',
      itemLabel8: '',
      itemLabel9: '',
      itemitemLabel10: '',
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
    ignoredProps: ['children', 'gutterBottom', 'internalDeprecatedVariant', 'paragraph'],
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
    badgeContent: {
      type: { name: 'string' },
      defaultValue: { value: componentSettings[component].propValues.badgeContent },
    },
    color: {
      type: { name: 'color' },
      defaultValue: { value: componentSettings[component].propValues.color },
    },
    backgroundColor: {
      type: { name: 'color' },
      defaultValue: { value: componentSettings[component].propValues.backgroundColor },
    },
    badgeColor: {
      type: {
        name: 'Enum',
        value: [
          { value: '\'default\'' },
          { value: '\'primary\'' },
          { value: '\'secondary\'' },
          { value: '\'error\'' },
        ],
      },
      description: 'IconButton badge theme',
      defaultValue: { value: componentSettings[component].propValues.badgeColor },
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
    imageFile: {
      type: {
        name: 'image',
        title: '\'Image File\'',
        hidden(props) {
          return props.imageUrl !== '';
        },
      },
      defaultValue: { value: componentSettings[component].propValues.imageFile },
    },
    imageUrl: {
      type: {
        name: 'string',
        title: '\'Image URL\'',
        hidden(props) {
          return props.imageFile !== '';
        },
      },
      defaultValue: { value: componentSettings[component].propValues.imageUrl },
      hidden(props) {
        return props.imageFile !== '';
      },
    },
    label: {
      type: {
        name: 'string',
        hidden(props) {
          return props.variant && props.variant === 'fab';
        },
      },
      defaultValue: { value: componentSettings[component].propValues.label },
    },
    paletteType: {
      type: { name: 'segmentedEnum', value: [{ value: '\'dark\'' }, { value: '\'light\'' }] },
      description: 'Theme palette type',
      defaultValue: { value: '\'light\'' },
    },
    progressValue: {
      type: {
        name: 'number',
        hidden(props) {
          return props.variant === 'indeterminate' || props.variant === 'query';
        },
      },
      defaultValue: { value: componentSettings[component].propValues.progressValue },
    },
    primary: {
      type: { name: 'color' },
      defaultValue: { value: componentSettings[component].propValues.primary },
    },
    itemLabel1: {
      type: { name: 'string' },
      defaultValue: { value: componentSettings[component].propValues.itemLabel1 },
    },
    itemLabel2: {
      type: {
        name: 'string',
        hidden(props) {
          return props.itemLabel1 === '' && props.itemLabel2 === '';
        },
      },
      defaultValue: { value: componentSettings[component].propValues.itemLabel2 },
    },
    itemLabel3: {
      type: {
        name: 'string',
        hidden(props) {
          return props.itemLabel2 === '' && props.itemLabel3 === '';
        },
      },
      defaultValue: { value: '\'\'' },
    },
    itemLabel4: {
      type: {
        name: 'string',
        hidden(props) {
          return props.itemLabel3 === '' && props.itemLabel4 === '';
        },
      },
      defaultValue: { value: '\'\'' },
    },
    itemLabel5: {
      type: {
        name: 'string',
        hidden(props) {
          return props.itemLabel4 === '' && props.itemLabel5 === '';
        },
      },
      defaultValue: { value: '\'\'' },
    },
    itemLabel6: {
      type: {
        name: 'string',
        hidden(props) {
          return props.itemLabel5 === '' && props.itemLabel6 === '';
        },
      },
      defaultValue: { value: '\'\'' },
    },
    itemitemLabel7: {
      type: {
        name: 'string',
        hidden(props) {
          return props.itemLabel6 === '' && props.itemitemLabel7 === '';
        },
      },
      defaultValue: { value: '\'\'' },
    },
    itemLabel8: {
      type: {
        name: 'string',
        hidden(props) {
          return props.itemitemLabel7 === '' && props.itemLabel8 === '';
        },
      },
      defaultValue: { value: '\'\'' },
    },
    itemLabel9: {
      type: {
        name: 'string',
        hidden(props) {
          return props.itemLabel8 === '' && props.itemLabel9 === '';
        },
      },
      defaultValue: { value: '\'\'' },
    },
    itemitemLabel10: {
      type: {
        name: 'string',
        hidden(props) {
          return props.itemLabel9 === '' && props.itemitemLabel10 === '';
        },
      },
      defaultValue: { value: '\'\'' },
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
    thickness: {
      type: { name: 'number', min: 0, max: 22 },
      defaultValue: { value: componentSettings[component].propValues.thickness },
    },
    valueBuffer: {
      type: {
        name: 'number',
        hidden(props) {
          return props.variant !== 'buffer';
        },
      },
      defaultValue: { value: componentSettings[component].propValues.valueBuffer },
    },
    width: {
      type: { name: 'number' },
      defaultValue: { value: componentSettings[component].propValues.width },
    },
  };

  // The props this component has default values for
  const propNames = Object.keys(componentSettings[component].propValues);

  const reducer = (additionalPropsObj, propName) => {
    const targetPropName = propName === 'progressValue' ? 'value' : propName;
    additionalPropsObj[targetPropName] = templates[propName];
    return additionalPropsObj;
  };

  return propNames.reduce(reducer, {});
};
