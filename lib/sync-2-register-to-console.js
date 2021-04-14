#!/usr/bin/env node
const { syncFolder } = require('./helper');

syncFolder('packages/asuna-default-adapter/src','modules/console/adapters', true);
syncFolder('modules/admin-register/src','modules/console', true);
