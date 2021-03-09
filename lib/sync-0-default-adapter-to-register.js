#!/usr/bin/env node
const { syncFolder } = require('./helper');

syncFolder('packages/asuna-default-adapter/src', 'modules/admin-register/src/adapters');
