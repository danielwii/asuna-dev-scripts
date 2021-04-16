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
  STATIC_ENDPOINT: process.env.STATIC_ENDPOINT,
  NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  NEXT_PUBLIC_STATIC_ENDPOINT: process.env.NEXT_PUBLIC_STATIC_ENDPOINT,
});

module.exports = {};
