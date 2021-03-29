import { Module, OnModuleInit } from '@nestjs/common';
import { GenericDataLoader, LoggerFactory } from '@danielwii/asuna-node-server';

import { createLoaders } from './domains/dataloaders';
import { DomainsModule } from './domains/domains.module';

const logger = LoggerFactory.getLogger('AppModule');

@Module({
  imports: [DomainsModule],
  providers: [],
})
export class ApplicationModule implements OnModuleInit {
  public onModuleInit(): void {
    logger.log('init...');

    new GenericDataLoader().initLoaders(createLoaders());
  }
}
