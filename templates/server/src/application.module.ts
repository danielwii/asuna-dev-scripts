import { Module, OnModuleInit } from '@nestjs/common';

import { LoggerFactory } from '@danielwii/asuna-helper';
import { GenericDataLoader } from '@danielwii/asuna-node-server/dist/modules/dataloader/dataloader';

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
