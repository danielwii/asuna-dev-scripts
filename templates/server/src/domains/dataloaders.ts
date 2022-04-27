import {
  DefaultRegisteredLoaders,
  getDefaultDataLoaders,
} from '@danielwii/asuna-node-server/dist/modules/dataloader/context';

export type RegisteredLoaders = DefaultRegisteredLoaders & {};

export const createLoaders = (): RegisteredLoaders => ({
  ...getDefaultDataLoaders(),
});
