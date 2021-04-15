import { GraphQLClient } from '@danielwii/asuna-sdk';

import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import nextCookie from 'next-cookies';

import { CustomGraphQLFetcher } from './fetcher';

import type { NextPageContext } from 'next';

export const initializer = (
  endpoint: string,
  ctx?: NextPageContext,
): { fetcher: CustomGraphQLFetcher /*,func: ServerFunc*/ } => {
  const token = ctx ? nextCookie(ctx).token : undefined;
  const fetcher = new CustomGraphQLFetcher(
    GraphQLClient(endpoint, {
      fragmentMatcher: new IntrospectionFragmentMatcher({
        introspectionQueryResultData: require('../graphql.schema.json'),
      }),
      ...(token ? { headers: { authorization: `Bearer ${token}` } } : {}),
    }),
  );
  return {
    fetcher,
    // func: new ServerFunc(new ServerApi(endpoint), fetcher),
  };
};
