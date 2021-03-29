import { Module, OnModuleInit } from '@nestjs/common';
import { LoggerFactory, UserRegister } from '@danielwii/asuna-node-server';
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
