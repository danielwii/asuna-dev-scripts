#!/usr/bin/env node
const { syncFolder } = require('./helper');
const fs             = require('fs-extra');

syncFolder('packages/asuna-default-adapter/src', 'modules/console/adapters', true);
syncFolder('modules/admin-register/src', 'modules/console', true);
fs.copySync('modules/admin-register/src/next.config.js', 'modules/console/next.config.js');
