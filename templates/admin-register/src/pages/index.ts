import { renderIndexPage } from '@danielwii/asuna-admin';

import getConfig from 'next/config';

import { register } from '../services/register';

export default renderIndexPage({ register, hideCharacteristics: true }, getConfig());
