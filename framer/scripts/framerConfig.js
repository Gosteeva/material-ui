export const componentSettings = {
  all: { ignoredProps: ['classes', 'className', 'component', 'id', 'name', '.*Props', '.*Ref'] },
  Avatar: {
    ignoredProps: ['alt', 'imgProps', 'sizes', 'src', 'srcSet'],
    propValues: {
      backgroundColor: "'#bdbdbd'",
      color: "'#fafafa'",
      icon: "'face'",
      randomImage: true,
      imageFile: "''",
      imageUrl: "''",
      label: "'MB'",
      width: 40,
      height: 40,
    },
    template: 'avatar.txt',
  },
  Badge: {
    ignoredProps: ['children', 'color', 'disableFocusRipple'],
    propValues: {
      icon: "''",
      theme: 'Filled',
      badgeContent: "'8'",
      badgeColor: "'primary'",
      width: 22,
      height: 22,
    },
    template: 'badge.txt',
  },
  BottomNavigation: {
    ignoredProps: ['children', 'onChange', 'ScrollButtonComponent', 'value'],
    propValues: {
      icon1: "'restore'",
      icon2: "'favorite'",
      icon3: "'location_on'",
      icon4: "'folder'",
      icon5: '',
      icon6: '',
      icon7: '',
      icon8: '',
      icon9: '',
      icon10: '',
      itemLabel1: "'Recents'",
      itemLabel2: "'Favorites'",
      itemLabel3: "'Nearby'",
      itemLabel4: "'Saved'",
      itemLabel5: '',
      itemLabel6: '',
      itemLabel7: '',
      itemLabel8: '',
      itemLabel9: '',
      itemLabel10: '',
      width: 500,
      height: 56,
    },
    template: 'bottom_navigation.txt',
  },
  Button: {
    ignoredProps: ['children', 'disableFocusRipple'],
    propValues: {
      icon: "''",
      theme: 'Filled',
      label: "'Button'",
      width: 100,
      height: 38,
    },
    template: 'button.txt',
  },
  Checkbox: {
    ignoredProps: ['checked', 'checkedIcon', 'icon', 'indeterminateIcon', 'type'],
    propValues: {
      label: "'Checkbox'",
      width: 100,
      height: 48,
    },
    template: 'selection_control.txt',
  },
  Chip: {
    ignoredProps: ['children', 'onDelete'],
    propValues: {
      avatar: false,
      clickable: true,
      deletable: false,
      deleteIcon: "''",
      icon: "''",
      theme: 'Filled',
      label: "'Chip'",
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
      icon: "'add'",
      theme: 'Filled',
      width: 24,
      height: 24,
    },
    template: 'icon.txt',
  },
  IconButton: {
    ignoredProps: [],
    propValues: {
      icon: "'favorite'",
      badgeContent: "''",
      badgeColor: "'default'",
      width: 48,
      height: 48,
    },
    template: 'icon_button.txt',
  },
  ListItem: {
    ignoredProps: ['ContainerComponent', 'ContainerProps'],
    propValues: {
      width: 568,
      height: 48,
      inset: false,
      label: "'Primary label'",
      secondaryLabel: "''",
      primaryAction: "'icon'",
      primaryIcon: "'star'",
      imageFile: "''",
      imageUrl: "''",
      secondaryAction: "'none'",
      secondaryIcon: "''",
    },
    template: 'list_item.txt',
  },
  LinearProgress: {
    ignoredProps: [],
    propValues: {
      width: "'100%'",
      height: 5,
      // thickness: 4,
      progressValue: 50,
      valueBuffer: 75,
    },
    template: 'self_closing.txt',
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
      appBarColor: "'primary'",
      label: "'Radio'",
      width: "'100%'",
      height: 48,
    },
    template: 'selection_control.txt',
  },
  RadioGroup: {
    ignoredProps: ['children', 'value'],
    propValues: {
      label: "'Radio group'",
      itemLabel1: "'Radio 1'",
      itemLabel2: "'Radio 2'",
      itemLabel3: "'Radio 3'",
      itemLabel4: "''",
      itemLabel5: '',
      itemLabel6: '',
      itemLabel7: '',
      itemLabel8: '',
      itemLabel9: '',
      itemLabel10: '',
      width: 200,
      height: 200,
    },
    template: 'radio_group.txt',
  },
  Switch: {
    ignoredProps: ['checked', 'type'],
    propValues: {
      label: "'Switch'",
      width: 100,
      height: 48,
    },
    template: 'selection_control.txt',
  },
  Tabs: {
    ignoredProps: ['children', 'onChange', 'ScrollButtonComponent', 'value'],
    propValues: {
      appBarColor: "'primary'",
      icon1: "'phone'",
      icon2: "'favorite'",
      icon3: "'person_pin'",
      icon4: "''",
      icon5: '',
      icon6: '',
      icon7: '',
      icon8: '',
      icon9: '',
      icon10: '',
      itemLabel1: "'Tab 1'",
      itemLabel2: "'Tab 2'",
      itemLabel3: "'Tab 3'",
      itemLabel4: "''",
      itemLabel5: '',
      itemLabel6: '',
      itemLabel7: '',
      itemLabel8: '',
      itemLabel9: '',
      itemLabel10: '',
      width: 500,
      height: 64,
    },
    template: 'tabs.txt',
  },
  Typography: {
    ignoredProps: ['children', 'gutterBottom', 'internalDeprecatedVariant', 'paragraph'],
    propValues: {
      label: "'Typography'",
      width: 100,
      height: 38,
    },
    template: 'label_as_children.txt',
  },
  MuiThemeProvider: {
    ignoredProps: ['disableStylesGeneration', 'options', 'sheetsManager', 'theme'],
    propValues: {
      paletteType: 'light',
      primary: "'#3f51b5'",
      secondary: "'#f50057'",
      error: "'#f44336'",
    },
    template: 'theme_provider.txt',
  },
  SnackbarContent: {
    ignoredProps: [],
    propValues: {
      width: 568,
      height: 48,
      message: "'I love candy. I love cookies. I love cupcakes.'",
      label: "'Nom nom nom'",
    },
    template: 'snackbar_content.txt',
  },
  TextField: {
    // FIXME: defaultValue - fix `Union`
    ignoredProps: ['autoComplete', 'defaultValue', 'rows', 'rowsMax', 'value'],
    propValues: {
      label: "'TextField'",
      width: 280,
      height: 56,
      fullWidth: true,
    },
    template: 'self_closing.txt',
  },
};

export const additionalProps = component => {
  const templates = {
    appBarColor: {
      type: {
        name: 'Enum',
        value: [
          { value: "'default'" },
          { value: "'primary'" },
          { value: "'secondary'" },
          { value: "'inherit'" },
        ],
      },
    },
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
          { value: "'default'" },
          { value: "'primary'" },
          { value: "'secondary'" },
          { value: "'error'" },
        ],
      },
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
        title: "'Image File'",
        hidden(props) {
          return props.primaryAction && props.primaryAction !== 'avatar';
        },
      },
      defaultValue: { value: componentSettings[component].propValues.imageFile },
    },
    imageUrl: {
      type: {
        name: 'string',
        title: "'Image URL'",
        hidden(props) {
          return (
            props.imageFile !== '' || (props.primaryAction && props.primaryAction !== 'avatar')
          );
        },
      },
      defaultValue: { value: componentSettings[component].propValues.imageUrl },
    },
    inset: {
      type: { name: 'boolean' },
      description: 'ListItem/ListItemText - inset',
      defaultValue: { value: componentSettings[component].propValues.inset },
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
      defaultValue: { value: componentSettings[component].propValues.itemLabel3 },
    },
    itemLabel4: {
      type: {
        name: 'string',
        hidden(props) {
          return props.itemLabel3 === '' && props.itemLabel4 === '';
        },
      },
      defaultValue: { value: componentSettings[component].propValues.itemLabel4 },
    },
    itemLabel5: {
      type: {
        name: 'string',
        hidden(props) {
          return props.itemLabel4 === '' && props.itemLabel5 === '';
        },
      },
      defaultValue: { value: "''" },
    },
    itemLabel6: {
      type: {
        name: 'string',
        hidden(props) {
          return props.itemLabel5 === '' && props.itemLabel6 === '';
        },
      },
      defaultValue: { value: "''" },
    },
    itemLabel7: {
      type: {
        name: 'string',
        hidden(props) {
          return props.itemLabel6 === '' && props.itemLabel7 === '';
        },
      },
      defaultValue: { value: "''" },
    },
    itemLabel8: {
      type: {
        name: 'string',
        hidden(props) {
          return props.itemLabel7 === '' && props.itemLabel8 === '';
        },
      },
      defaultValue: { value: "''" },
    },
    itemLabel9: {
      type: {
        name: 'string',
        hidden(props) {
          return props.itemLabel8 === '' && props.itemLabel9 === '';
        },
      },
      defaultValue: { value: "''" },
    },
    itemLabel10: {
      type: {
        name: 'string',
        hidden(props) {
          return props.itemLabel9 === '' && props.itemLabel10 === '';
        },
      },
      defaultValue: { value: "''" },
    },
    icon1: {
      type: { name: 'string' },
      defaultValue: { value: componentSettings[component].propValues.icon1 },
    },
    icon2: {
      type: {
        name: 'string',
        hidden(props) {
          return props.icon1 === '' && props.icon2 === '';
        },
      },
      defaultValue: { value: componentSettings[component].propValues.icon2 },
    },
    icon3: {
      type: {
        name: 'string',
        hidden(props) {
          return props.icon2 === '' && props.icon3 === '';
        },
      },
      defaultValue: { value: componentSettings[component].propValues.icon3 },
    },
    icon4: {
      type: {
        name: 'string',
        hidden(props) {
          return props.icon3 === '' && props.icon4 === '';
        },
      },
      defaultValue: { value: componentSettings[component].propValues.icon4 },
    },
    icon5: {
      type: {
        name: 'string',
        hidden(props) {
          return props.icon4 === '' && props.icon5 === '';
        },
      },
      defaultValue: { value: "''" },
    },
    icon6: {
      type: {
        name: 'string',
        hidden(props) {
          return props.icon5 === '' && props.icon6 === '';
        },
      },
      defaultValue: { value: "''" },
    },
    icon7: {
      type: {
        name: 'string',
        hidden(props) {
          return props.icon6 === '' && props.icon7 === '';
        },
      },
      defaultValue: { value: "''" },
    },
    icon8: {
      type: {
        name: 'string',
        hidden(props) {
          return props.icon7 === '' && props.icon8 === '';
        },
      },
      defaultValue: { value: "''" },
    },
    icon9: {
      type: {
        name: 'string',
        hidden(props) {
          return props.icon8 === '' && props.icon9 === '';
        },
      },
      defaultValue: { value: "''" },
    },
    icon10: {
      type: {
        name: 'string',
        hidden(props) {
          return props.icon9 === '' && props.icon10 === '';
        },
      },
      defaultValue: { value: "''" },
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
    message: {
      type: { name: 'string' },
      defaultValue: { value: componentSettings[component].propValues.message },
    },
    paletteType: {
      type: { name: 'segmentedEnum', value: [{ value: "'dark'" }, { value: "'light'" }] },
      description: 'Theme palette type',
      defaultValue: { value: "'light'" },
    },
    primary: {
      type: { name: 'color' },
      defaultValue: { value: componentSettings[component].propValues.primary },
    },
    primaryAction: {
      type: {
        name: 'Enum',
        value: [
          { value: "'none'" },
          { value: "'icon'" },
          { value: "'avatar'" },
          { value: "'checkbox'" },
        ],
      },
      defaultValue: { value: componentSettings[component].propValues.primaryAction },
    },
    primaryIcon: {
      type: {
        name: 'string',
        hidden(props) {
          return (
            (props.primaryAction !== 'icon' && props.primaryAction !== 'avatar') ||
            props.imageFile !== '' ||
            props.imageUrl !== ''
          );
        },
      },
      defaultValue: { value: componentSettings[component].propValues.primaryIcon },
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
    randomImage: {
      type: { name: 'boolean' },
      description: 'Avatar - use random image',
      defaultValue: { value: componentSettings[component].propValues.randomImage },
    },
    secondary: {
      type: { name: 'color' },
      defaultValue: { value: componentSettings[component].propValues.secondary },
    },
    secondaryAction: {
      type: {
        name: 'Enum',
        value: [
          { value: "'none'" },
          { value: "'icon'" },
          { value: "'iconButton'" },
          { value: "'checkbox'" },
          { value: "'switch'" },
        ],
      },
    },
    secondaryIcon: {
      type: {
        name: 'string',
        hidden(props) {
          return props.secondaryAction !== 'icon' && props.secondaryAction !== 'iconButton';
        },
      },
      defaultValue: { value: componentSettings[component].propValues.secondaryIcon },
    },
    secondaryLabel: {
      type: { name: 'string' },
      defaultValue: { value: componentSettings[component].propValues.secondaryLabel },
    },
    theme: {
      type: {
        name: 'Enum',
        value: [
          { value: "'Filled'" },
          { value: "'Outlined'" },
          { value: "'Rounded'" },
          { value: "'TwoTone'" },
          { value: "'Sharp'" },
        ],
      },
      description: 'Icon theme',
      defaultValue: { value: "'Filled'" },
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
