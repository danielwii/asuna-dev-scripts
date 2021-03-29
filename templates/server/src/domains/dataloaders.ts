import { DataLoaderFunction, getDefaultDataLoaders, DefaultRegisteredLoaders, loader } from '@danielwii/asuna-node-server';

export type RegisteredLoaders = DefaultRegisteredLoaders & {
};

export const createLoaders = (): RegisteredLoaders => ({
  ...getDefaultDataLoaders(),
});
