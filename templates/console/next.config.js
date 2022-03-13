const { existsSync } = require('fs-extra');
const { createNextConfig } = require('@danielwii/asuna-helper/dist/next/config');
const withTM = require('next-transpile-modules');

module.exports = createNextConfig(
  {
    i18n: existsSync('./next-i18next.config.js') ? require('./next-i18next.config').i18n : undefined,
    swcMinify: false,
  },
  existsSync('./configs.js') ? require('./configs') : undefined,
  [
    withTM([
      '@danielwii/asuna-admin',
      // '@danielwii/asuna-components',
      // '@danielwii/asuna-components-pro'
    ]),
  ],
  { enableAdmin: true },
);
