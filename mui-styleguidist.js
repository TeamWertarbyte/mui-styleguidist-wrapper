#!/usr/bin/env node
const { spawnSync } = require('child_process')
const path = require('path')
require.resolve('react-styleguidist')

spawnSync(
    path.join(__dirname, 'node_modules', '.bin', 'styleguidist'),
    [
        '--config', path.join(__dirname, 'styleguide.config.js'),
        ...process.argv.slice(2)
    ],
    { stdio: 'inherit', cwd: process.cwd() }
)
