#!/usr/bin/env node
const { glob } = require('glob');
const _ = require('lodash');
const path = require('path');
const fs = require('fs-extra');
const console = require('consola');

const TAG = '[Asuna]';
const mainFolder = require.main.pnpApiPath ? path.dirname(require.main.pnpApiPath) : process.env.INIT_CWD;
const packageFile = path.resolve(mainFolder, 'package.json');
console.info(TAG, 'load package.json from', { mainFolder, packageFile });

const pkg = require(packageFile);

console.info(TAG, 'found workspaces', pkg.workspaces);

(async () => {
  const files = await Promise.all(pkg.workspaces.map((workspace) => glob(`${workspace}/yarn.lock`, {}))).then(
    _.flatten,
  );
  console.info(TAG, 'remove lock files', files);
  _.forEach(files, (file) => fs.removeSync(file));
})();
