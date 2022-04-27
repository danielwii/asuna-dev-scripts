import { Module, OnModuleInit } from '@nestjs/common';

import { LoggerFactory } from '@danielwii/asuna-helper/dist/logger/factory';

const logger = LoggerFactory.getLogger('BusinessModule');

@Module({
  imports: [],
  providers: [],
})
export class BusinessModule implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    logger.log('init...');
  }
}
