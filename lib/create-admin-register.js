#!/usr/bin/env node
const { syncFolder } = require('./helper');

syncFolder('packages/asuna-dev-scripts/templates/admin-register', 'modules/admin-register', false);
