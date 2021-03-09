#!/usr/bin/env node
const { syncFolder } = require('./helper');

syncFolder('packages/asuna-default-adapter/src','modules/admin/adapters', true);
syncFolder('modules/admin-register/src','modules/admin', true);
