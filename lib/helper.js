#!/usr/bin/env node
const glob    = require('glob');
const _       = require('lodash');
const path    = require('path');
const fs      = require('fs-extra');
const console = require('consola');

const TAG         = '[Asuna]';
const mainFolder  = require.main.pnpApiPath ? path.dirname(require.main.pnpApiPath) : process.env.INIT_CWD;
const packageFile = path.resolve(mainFolder, 'package.json');
console.info(TAG, 'load package.json from', { mainFolder, packageFile });

const pkg = require(packageFile);

function syncFolder(sourceDir, destDir, overwrite) {
  console.info(TAG, 'Sync folder', { sourceDir, destDir, overwrite });
  const source = path.resolve(mainFolder, sourceDir);

  if (!fs.pathExistsSync(source)) {
    console.error(TAG, "Path not exists", source);
    return;
  }

  const dest = path.resolve(mainFolder, destDir);
  console.info(TAG, 'Ensure folder exists', dest);
  // mkdir -p admin-register/src/adapters
  fs.ensureDirSync(dest);
  console.info(TAG, 'Copy', { source, dest });
  fs.copySync(source, dest, { overwrite });
}

module.exports = {
  syncFolder, mainFolder, packageFile, pkg
};
