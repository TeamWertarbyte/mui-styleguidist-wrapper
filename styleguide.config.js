const {createConfig} = require('@webpack-blocks/webpack2')
const babel = require('@webpack-blocks/babel6')
const path = require('path')
const fs = require('fs')
const defaultsDeep = require('lodash.defaultsdeep')

const defaultConfig = {
  styleguideDir: path.join(process.cwd(), 'styleguide'),
  webpackConfig: defaultsDeep({
    resolve: {
      alias: {
        'rsg-components/Wrapper': path.join(__dirname, 'lib', 'Wrapper'),
        'react': path.dirname(require.resolve('react')),
        'react-dom': path.dirname(require.resolve('react-dom'))
      },
      modules: []
    }
  }, createConfig([ babel() ])),
  skipComponentsWithoutExample: true,
  components: process.cwd() + '/src/**/[A-Z]*.js',

  getComponentPathLine (componentPath) {
    const name = path.basename(componentPath, '.js')
    const packageName = require(path.join(process.cwd(), 'package.json')).name
    return `import ${name} from '${packageName}';`
  }
}

let config = defaultConfig
const configFile = path.join(process.cwd(), 'styleguide.config.js')
if (fs.existsSync(configFile)) {
  config = defaultsDeep(require(configFile), defaultConfig)
}

config.webpackConfig.resolve.modules.push('node_modules')

module.exports = config
