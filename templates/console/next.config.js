/* eslint-disable no-param-reassign */
const R = require('ramda');
const withCss = require('@zeit/next-css');
const withTM = require('next-transpile-modules');
const pkg = require('./package.json');
const consola = require('consola');

const configs = R.compose(
  withCss,
  withTM(['@danielwii/asuna-admin']),
)({
  webpack: (config, options) => {
    const { dev, isServer, buildId } = options;
    if (!isServer && buildId) {
      consola.info('> [webpack] building...', buildId);
    }
    /*
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'postcss-loader',
      ],
    });
*/

    // Fixes npm packages that depend on `fs` module
    config.node = { fs: 'empty' };

    consola.info(`> [webpack-${isServer ? 'Server' : 'Client'}] defaultLoaders is`, options.defaultLoaders);
    consola.info(`> [webpack-${isServer ? 'Server' : 'Client'}] config.module is`, config.module);

    return config;
  },

  serverRuntimeConfig: { isServer: true },
  publicRuntimeConfig: { env: process.env.ENV || 'dev', version: pkg.version },
});

consola.info('configs is ', configs);

module.exports = configs;
