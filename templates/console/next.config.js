/* eslint-disable no-param-reassign */
const R = require('ramda');
const withCss = require('@zeit/next-css');
const withTM = require('next-transpile-modules');
const pkg = require('./package.json');
const consola = require('consola');

if (process.env.PROXY_API)
  consola.warn(
    'deprecated configs',
    { PROXY_API: process.env.PROXY_API },
    'using API_ENDPOINT/NEXT_PUBLIC_API_ENDPOINT instead.',
  );

consola.log('init next with', {
  NODE_TLS_REJECT_UNAUTHORIZED: process.env.NODE_TLS_REJECT_UNAUTHORIZED,
  API_ENDPOINT: process.env.API_ENDPOINT,
  WS_ENDPOINT: process.env.WS_ENDPOINT,
  STATIC_ENDPOINT: process.env.STATIC_ENDPOINT,
  NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  NEXT_PUBLIC_WS_ENDPOINT: process.env.NEXT_PUBLIC_WS_ENDPOINT,
  NEXT_PUBLIC_STATIC_ENDPOINT: process.env.NEXT_PUBLIC_STATIC_ENDPOINT,
});


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
