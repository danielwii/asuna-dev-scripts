import { Module, OnModuleInit } from '@nestjs/common';
import { LoggerFactory } from 'asuna-node-server';

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
