#!/usr/bin/env node
const { syncFolder } = require('./helper');

syncFolder('packages/asuna-dev-scripts/templates/console', 'modules/console', true);
