#!/usr/bin/env node
const { spawnSync } = require('child_process')
const path = require('path')

spawnSync(
  require.resolve('react-styleguidist/bin/styleguidist'),
  [
    '--config', path.join(__dirname, 'styleguide.config.js'),
    ...process.argv.slice(2)
  ],
  { stdio: 'inherit', cwd: process.cwd() }
)
