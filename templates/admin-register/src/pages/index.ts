import { renderIndexPage } from 'asuna-admin';
import getConfig from 'next/config';
import { register } from '../services/register';

export default renderIndexPage({ register }, getConfig());
