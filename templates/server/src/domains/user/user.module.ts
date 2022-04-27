import { Module, OnModuleInit } from '@nestjs/common';

import { LoggerFactory } from '@danielwii/asuna-helper/dist/logger/factory';
import { UserRegister } from '@danielwii/asuna-node-server/dist/modules/core/user.register';

import { User } from './user.entities';

const logger = LoggerFactory.getLogger('UserModule');

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
