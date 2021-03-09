#!/usr/bin/env node
const { syncFolder } = require('./helper');

syncFolder('modules/admin-register/src', 'packages/asuna-admin', true);
