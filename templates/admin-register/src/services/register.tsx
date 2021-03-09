import { ComponentService, Config, GroupFormKVComponent } from 'asuna-admin';
import * as React from 'react';
import { createRegister } from '../adapters';

import { definitions } from './definitions';

Config.update({
  AUTH_HEADER: 'Mgmt',
  MODEL_KEYS_CASE: 'Camel',
  MODEL_NAME_CASE: 'Snake',
  API_RESPONSE_ASSOCIATION_MODE: 'entity',
  CLIENT_GEN_UPLOADER_PREFIX: true,
});

const componentService = new ComponentService();

export const register = createRegister(definitions, componentService);
