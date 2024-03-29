const { bootstrap } = require('@asuna-stack/asuna-sdk/dist/next/simple-server');
const { loadEnvConfig } = require('@next/env');

loadEnvConfig('./', process.env.NODE_ENV !== 'production');
bootstrap(require('./next.config'));
