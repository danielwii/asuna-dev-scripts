import { DataLoaderFunction, getDefaultDataLoaders, DefaultRegisteredLoaders, loader } from 'asuna-node-server';

export type RegisteredLoaders = DefaultRegisteredLoaders & {
};

export const createLoaders = (): RegisteredLoaders => ({
  ...getDefaultDataLoaders(),
});
