/* eslint-disable no-console,max-len */

import { mkdir, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import * as reactDocgen from 'react-docgen';
import Mustache from 'mustache';
import { findComponents } from '../../docs/src/modules/utils/find';
import { additionalProps, componentSettings } from './framerConfig';

// const DEBUG = true;

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

  function getRactAPI() {
    let reactAPI;

    try {
      reactAPI = reactDocgen.parse(src);
    } catch (err) {
      console.log('Error parsing src for', componentObject.filename);
      throw err;
    }

    reactAPI.name = path.parse(componentObject.filename).name;

    return reactAPI;
  }

  const reactAPI = getRactAPI();

  // if (typeof DEBUG !== 'undefined') {
  //   if (reactAPI.name !== 'RadioGroup') {
  //     return;
  //   }
  // }

  // Only supported components
  if (!Object.keys(componentSettings).includes(reactAPI.name)) {
    return;
  }

  // Add additional props, if the template values exist for this component
  if (componentSettings[reactAPI.name].propValues) {
    Object.assign(reactAPI.props, additionalProps(reactAPI.name));
  }

  reactAPI.propNames = Object.keys(reactAPI.props);

  // Relative location in the file system.
  reactAPI.filename = componentObject.filename.replace(rootDirectory, '');

  // Build the options list for Enum PropType / TS property types
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

  // Return true if a prop is in the ignoredProps list, or description contains `@ignore`.
  function ignore(prop) {
    // Test if the propName contains a (sub)string from ignoredProps
    const blacklist = componentSettings.all.ignoredProps.concat(componentSettings[reactAPI.name].ignoredProps);
    const reducer = (accumulator, currentValue) => accumulator ||
      new RegExp(`^${currentValue}$`).test(prop.name);

    return prop.description && prop.description.includes('@ignore') || blacklist.reduce(reducer, false);
  }

  function getTemplateStrings() {
    let tsInterface = '';
    let defaults = '';
    let controls = '';

    reactAPI.propNames.forEach(propName => {
      const prop = reactAPI.props[propName];
      prop.name = propName;

      if (ignore(prop)) {
        return;
      }

      const propTypeTS = Object.assign({}, prop.type);

      // TODO: Refactor as case?
      if (propTypeTS.name === 'bool') {
        propTypeTS.name = 'boolean';
      }
      if (propTypeTS.name === 'color') {
        propTypeTS.name = 'string';
      }
      if (propTypeTS.name === 'node') {
        propTypeTS.name = 'React.ReactNode';
      }
      if (propTypeTS.name === 'element') {
        propTypeTS.name = 'React.ReactElement<any>';
      }
      if (propTypeTS.name === 'func') {
        propTypeTS.name = '() => void';
      }

      tsInterface += `  ${propName}: ${propTypeTS.value ? `${options(propTypeTS, ' | ')}` : `${propTypeTS.name}`};\n`;

      if (prop.defaultValue) {
        defaults += `    ${propName}: ${prop.defaultValue.value},\n`;
      }

      const propTypeControls = Object.assign({}, prop.type);

      if (propTypeControls.name === 'bool') {
        propTypeControls.name = 'boolean';
      }

      // console.log('HIDDEN', propTypeControls.hidden);
      const ignoredControls = ['children', 'width', 'height'];
      if (!ignoredControls.includes(prop.name)) {
        controls += `
    ${propName}: {
      type: ControlType.${capitalize(propTypeControls.name)},
      title: '${capitalize(propName)}',${propTypeControls.value ? `\n      options: [${options(propTypeControls, ', ')}],` : ''}${propTypeControls.hidden ? `\n      hidden: ${propTypeControls.hidden},` : ''}
    },`;
      }
    });


    return {
      componentName: reactAPI.name,
      // Omit the trailing \n
      tsInterface: tsInterface.slice(0, -1),
      defaultProps: defaults.slice(0, -1),
      propertyControls: controls.slice(1),
    };
  }

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

  function writeFile() {
    ensureExists(framerDirectory, 0o744, err => {
      if (err) {
        console.log('Error creating directory', framerDirectory);
        return;
      }

      const template = readFileSync(path.join(__dirname, `templates/${componentSettings[reactAPI.name].template}`), 'utf8');
      const fileString = Mustache.render(template, getTemplateStrings());
      writeFileSync(path.resolve(framerDirectory, `${reactAPI.name}.tsx`), fileString);
      console.log('Built Framer component for', reactAPI.name);
    });
  }

  if (typeof DEBUG !== 'undefined') {
    console.log(reactAPI.props);
  }
  writeFile();
}

function run() {
  const components = findComponents(path.resolve(rootDirectory, args[2]));

  components.forEach(component => {
    // console.log('Building Framer component for', component);
    buildFramer(component);
  });
}

run();
