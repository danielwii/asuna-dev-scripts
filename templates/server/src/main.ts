import { bootstrap } from '@danielwii/asuna-node-server';
import consola from "consola";

import { ApplicationModule } from './application.module';

const logger = consola.withScope('[main]');

bootstrap(ApplicationModule, { redisMode: 'redis' }).catch(logger.error);
