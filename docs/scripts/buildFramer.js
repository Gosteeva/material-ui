/* eslint-disable no-console,max-len */

import { mkdir, readFileSync, writeFileSync } from 'fs';
// import fs from 'fs';
import path from 'path';
import * as reactDocgen from 'react-docgen';
import Mustache from 'mustache';
import { findComponents } from '../src/modules/utils/find';

const ignoredComponents = [
  'ClickAwayListener',
  'Collapse',
  'CssBaseline',
  'ButtonBase',
  'Fade',
  'FormControl',
  'FormControlLabel',
  'FormHelperText',
  'FormLabel',
  'Grid',
  'Grow',
  'Hidden',
  'Icon',
  'InputAdornment',
  'InputBase',
  'InputLabel',
  'NoSsr',
  'Popover',
  'Popper',
  'Portal',
  'RadioGroup',
  'RootRef',
  'Slide',
  // TODO: Snackbar `shape` proptype
  'Snackbar',
  'SvgIcon',
  'SwipeableDrawer',
  'TouchRipple',
  'Zoom',
];

const ignoredProps = ['classes', 'className', 'component'];
const additionalProps = {
  Button: {
    label: {
      type: { name: 'string' },
      required: false,
      description: 'Label',
      defaultValue: 'Label',
    },
    width: {
      type: { name: 'number' },
      required: false,
      description: 'Width',
      defaultValue: 100,
    },
    height: {
      type: { name: 'number' },
      required: false,
      description: 'Height',
      defaultValue: 38,
    },
  },
};

function ensureExists(pat, mask, cb) {
  mkdir(pat, mask, err => {
    if (err) {
      if (err.code === 'EEXIST') {
        cb(null); // ignore the error if the folder already exists
      } else {
        cb(err); // something else went wrong
      }
    } else {
      cb(null); // successfully created folder
    }
  });
}

// Read the command-line args
const args = process.argv;

// Exit with a message
function exit(error) {
  console.log(error, '\n');
  process.exit();
}

if (args.length < 4) {
  exit('\nERROR: syntax: buildApi source target');
}

const rootDirectory = path.resolve(__dirname, '../../');
const framerDirectory = path.resolve(rootDirectory, args[3]);

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substr(1);
}

function buildFramer(componentObject) {
  const src = readFileSync(componentObject.filename, 'utf8');

  if (src.match(/@ignore - internal component\./) || src.match(/@ignore - do not document\./)) {
    return;
  }

  let reactAPI;

  try {
    reactAPI = reactDocgen.parse(src);
  } catch (err) {
    console.log('Error parsing src for', componentObject.filename);
    throw err;
  }

  reactAPI.name = path.parse(componentObject.filename).name;

  if (reactAPI.name !== 'Button') {
    return;
  }

  if (ignoredComponents.includes(reactAPI.name)) {
    return;
  }

  Object.assign(reactAPI.props, additionalProps[reactAPI.name]);
  reactAPI.propNames = Object.keys(reactAPI.props);

  // Relative location in the file system.
  reactAPI.filename = componentObject.filename.replace(rootDirectory, '');

  // Build the options list for Enum / TS property types
  function options(type, separator) {
    let optionsString = '';
    if (type.value) {
      type.value.forEach(value => {
        optionsString += `${value.value}${separator}`;
      });
    }
    // Remove the trailing comma
    return optionsString.slice(0, -separator.length);
  }

  /**
   * Typyscrpt interface
   * @returns {string}
   */
  function tsInterface() {
    let tsProps = '';

    reactAPI.propNames.forEach(propName => {
      const prop = reactAPI.props[propName];
      const type = Object.assign({}, prop.type);

      // TODO: Refactor as case?
      if (type.name === 'bool') {
        type.name = 'boolean';
      }
      if (type.name === 'node') {
        type.name = 'React.ReactNode';
      }
      if (type.name === 'element') {
        type.name = 'React.ReactElement<any>';
      }
      if (type.name === 'func') {
        type.name = '() => void';
      }

      if (prop.description === '@ignore' || ignoredProps.includes(propName)) {
        return;
      }

      tsProps += `  ${propName}: ${type.value ? `${options(type, ' | ')}` : `${type.name}`};\n`;
    });

    // Remove the trailing \n
    return tsProps.slice(0, -1);
  }

  /**
   * Default props
   * @returns {string}
   */
  function defaultProps() {
    let defaults = '';

    reactAPI.propNames.forEach(propName => {
      const prop = reactAPI.props[propName];
      const type = prop.type;

      if (type.name === 'Bool') {
        type.name = 'Boolean';
      }

      if (prop.description === '@ignore' || ignoredProps.includes(propName)) {
        return;
      }

      if (prop.defaultValue) {
        defaults += `    ${propName}: ${prop.defaultValue.value},\n`;
      }
    });

    // Remove the trailing \n
    return defaults.slice(0, -1);
  }

  /**
   * Property controls
   * @returns {string}
   */
  function propertyControls() {
    let controls = '';

    reactAPI.propNames.forEach(propName => {
      const prop = reactAPI.props[propName];
      const type = prop.type;

      if (type.name === 'bool') {
        type.name = 'boolean';
      }

      if (prop.description.includes('@ignore') || ignoredProps.includes(propName) || propName === 'children') {
        return;
      }

      controls += `
    ${propName}: {
      type: ControlType.${capitalize(type.name)},
      title: '${capitalize(propName)}',${type.value ? `\n      options: [${options(type, ', ')}],` : ''}
    },`;
    });

    return controls.slice(1);
  }

  ensureExists(framerDirectory, 0o744, err => {
    if (err) {
      console.log('Error creating directory', framerDirectory);
      return;
    }

    const template = readFileSync(path.join(__dirname, 'templates/label_as_children.txt'), 'utf8');

    const fileString = Mustache.render(template, {
      componentName: reactAPI.name,
      tsInterface: tsInterface(),
      defaultProps: defaultProps(),
      propertyControls: propertyControls(),
    });

    writeFileSync(path.resolve(framerDirectory, `${reactAPI.name}.tsx`), fileString);
    console.log('Built Framer component for', reactAPI.name);
    // console.log(reactAPI.props);
    // console.log(propertyControls());
  });
}

function run() {
  const components = findComponents(path.resolve(rootDirectory, args[2]));

  components.forEach(component => {
    // console.log('Building Framer component for', component);
    buildFramer(component);
  });
}

run();
