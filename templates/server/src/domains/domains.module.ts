import { Global, Module, OnModuleInit } from '@nestjs/common';
import { LoggerFactory } from '@danielwii/asuna-node-server';

import { UserModule } from "./user/user.module";
import { BusinessModule } from "./business/business.module";

const logger = LoggerFactory.getLogger('DomainsModule');

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
