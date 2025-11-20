#!/usr/bin/env node

import { buildJsIcons, buildIconsList } from '../../.build/build-icons.mjs'

const componentTemplate = ({
  type,
  name,
  namePascal,
  children
}) => `\
import createReactNativeComponent from '../createReactNativeComponent';
export const Icon${namePascal} = createReactNativeComponent('${type}', '${name}', '${namePascal}', ${JSON.stringify(children)});`;

const indexItemTemplate = ({
  name,
  namePascal
}) => `export { Icon${namePascal} } from './Icon${namePascal}';`

const aliasTemplate = ({ fromPascal, toPascal }) => `export { Icon${toPascal} as Icon${fromPascal} } from './icons/Icon${toPascal}';\n`

buildJsIcons({
  name: 'icons-react-native',
  componentTemplate,
  indexItemTemplate,
  aliasTemplate,
  indexFile: 'index.ts',
  pascalCase: true,
  extension: 'ts'
})

buildIconsList('icons-react-native')
