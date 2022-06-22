import { Global, Logger, Module, OnModuleInit } from '@nestjs/common';

import { resolveModule } from '@danielwii/asuna-helper/dist/logger/factory';

import { BusinessModule } from './business/business.module';
import { UserModule } from './user/user.module';

const logger = new Logger(resolveModule(__filename, 'DomainsModule'));

@Global()
@Module({
  imports: [UserModule, BusinessModule],
  exports: [],
})
export class DomainsModule implements OnModuleInit {
  public onModuleInit(): void {
    logger.log('init...');
  }
}
