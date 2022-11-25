import { Logger, Module, OnModuleInit } from '@nestjs/common';

import { resolveModule } from '@danielwii/asuna-helper/dist/logger/factory';

const logger = new Logger(resolveModule(fileURLToPath(import.meta.url), 'BusinessModule'));

@Module({
  imports: [],
  providers: [],
})
export class BusinessModule implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    logger.log('init...');
  }
}
