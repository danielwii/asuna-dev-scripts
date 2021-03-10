const { createConfigLoader } = require('node-buffs');
const debug = require('debug');
const _ = require('lodash');

const logger = { log: debug('processor'), error: debug('error') };

const configurator = createConfigLoader({
  requiredVariables: ['PROXY_API'],
});

const PROXY_API = configurator.loadConfig('PROXY_API');
const WS_ENDPOINT = configurator.loadConfig('WS_ENDPOINT', PROXY_API);
const ASSETS_HOST = configurator.loadConfig('ASSETS_HOST');
const cachedHost = _.memoize((key) => configurator.loadConfig(`${`${key}`.toUpperCase()}_PATH_HOST`));

module.exports = {
  configurator,
  configs: configurator.loadConfigs(),
  proxy: [
    { pathname: '/socket.io/', target: WS_ENDPOINT, disableLogger: true },
    { pathname: '/ws/', target: WS_ENDPOINT, disableLogger: true },
    { pathname: '/admin/', target: WS_ENDPOINT },
    // { pathname: '/api/', target: PROXY_API },
    {
      pathname: '/proxy',
      target: PROXY_API,
      dest: (req) => {
        const groups = /proxy\/(.+)/.exec(req.url);
        const rewriteTo = `/api/${groups[1]}`;
        logger.log(`rewrite to ${rewriteTo}`);
        return rewriteTo;
      },
    },
    // { pathname: '/rest/', target: PROXY_API },
    {
      pathname: '/uploads',
      redirectTo: (req) => {
        let redirectTo = `${PROXY_API}${req.url}`;
        const groups = /uploads\/(\w+)\/(.+)/.exec(req.url);
        const foundHost = cachedHost(groups[1]);
        if (foundHost) {
          redirectTo = `${foundHost}/${groups[1]}/${groups[2]}`;
        } else if (ASSETS_HOST) {
          redirectTo = `${ASSETS_HOST}/${groups[1]}/${groups[2]}`;
        }
        logger.log(`redirect to ${redirectTo} - ${foundHost}`);
        return redirectTo;
      },
    },
    // { pathname: '/admin/', target: PROXY_API },
  ],
  // graphql: { dest: () => 'graphql', target: PROXY_API },
};
