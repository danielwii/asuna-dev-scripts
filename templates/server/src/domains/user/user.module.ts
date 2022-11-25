import { Logger, Module, OnModuleInit } from '@nestjs/common';

import { resolveModule } from '@danielwii/asuna-helper/dist/logger/factory';
import { UserRegister } from '@danielwii/asuna-node-server/dist/modules/core/user.register';

import { User } from './user.entities';

const logger = new Logger(resolveModule(fileURLToPath(import.meta.url), 'UserModule'));

@Module({
  imports: [],
  providers: [],
  exports: [],
})
export class UserModule implements OnModuleInit {
  onModuleInit(): any {
    logger.log('init...');

    UserRegister.regCoreUserCreator(User);
  }
}
