import { Logger, Module, OnModuleInit } from '@nestjs/common';

import { resolveModule } from '@danielwii/asuna-helper/dist/logger/factory';
import { GenericDataLoader } from '@danielwii/asuna-node-server/dist/modules/dataloader/dataloader';

import { createLoaders } from './domains/dataloaders';
import { DomainsModule } from './domains/domains.module';

const logger = new Logger(resolveModule(__filename, 'AppModule'));

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
