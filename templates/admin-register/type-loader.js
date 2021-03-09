/* eslint-disable @typescript-eslint/no-var-requires */
const { createConfigLoader } = require('node-buffs');
const axios = require('axios');
const fs = require('fs-extra');
const _ = require('lodash');
const util = require('util');
const consola = require('consola');

const configLoader = createConfigLoader();
const url = `${configLoader.loadConfig('PROXY_API', 'http://127.0.0.1:5000')}/graphql`;
consola.info('load schema from', url);

axios
  .post(url, {
    // language=GraphQL
    query: `
      {
        sys_modelSchemas {
          name
          internal
          schema
        }
      }
    `,
  })
  .then((response) => {
    // consola.info('loaded', util.inspect(response.data, { color: true, depth: 5 }));

    const data = _.get(response.data, 'data.sys_modelSchemas');
    const sysSchemas = _.map(
      _.filter(data, ({ internal }) => internal),
      (current) => ({ [current.name]: current.schema.map((v) => ({ [v.name]: '' })) }),
    );

    // consola.info(util.inspect(sysSchemas, { color: true, depth: 5 }));
    fs.writeJson('./schema-sys.json', sysSchemas)
      .then(() => consola.success('generate schema-sys.json successfully!'))
      .catch(consola.error);
    const schemas = _.map(
      _.filter(data, ({ internal }) => !internal),
      (current) => ({ [current.name]: current.schema.map((v) => ({ [v.name]: '' })) }),
    );

    // consola.info(util.inspect(schemas, { color: true, depth: 5 }));
    fs.writeJson('./schema.json', schemas)
      .then(() => consola.success('generate schema.json successfully!'))
      .catch(consola.error);
  })
  .catch((reason) => consola.error(reason.message));
