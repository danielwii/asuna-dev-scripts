import { BaseGraphQLFetcher } from '@danielwii/asuna-sdk';

import { ApolloQueryResult, gql } from '@apollo/client';

class GraphQLFragments {}

export class CustomGraphQLFetcher extends BaseGraphQLFetcher {
  /*
  async loadSlides(queryVariables: {
    category: string;
    pageRequest?: PageRequest;
  }): Promise<ApolloQueryResult<LoadSlidesQuery>> {
    const variables: LoadSlidesQueryVariables = {
      nQuery: { category: queryVariables.category },
      nPageRequest: { page: 1, ...(queryVariables.pageRequest ?? {}) },
    };
    return this.query({
      variables,
      query: gql`
        query loadSlides($nQuery: CommonCondition!, $nPageRequest: PageRequest) {
          api_paged_slides(query: $nQuery, pageRequest: $nPageRequest) {
            items {
              id
              image
              link
              title
              openType
              thumbnail
            }
          }
        }
      `,
    });
  }
*/

  /*
  async loadSort(queryVariables: { name: string; type: SortType }): Promise<ApolloQueryResult<LoadSortQuery>> {
    const variables: LoadSortQueryVariables = { nName: queryVariables.name, nType: queryVariables.type };
    return this.query({
      variables,
      query: gql`
#        query info {
#          app_info {
#            id
#          }
#        }
        query loadSort($nName: String!, $nType: SortType!) {
          sort(name: $nName, type: $nType) {
            items {
              ... on College {
                id
                name
                logo
                cover
                admission
              }
            }
          }
        }
      `,
    });
  }
*/

  /*
  async loadArticles(queryVariables: {
    category?: number;
    pageRequest?: PageRequest;
  }): Promise<ApolloQueryResult<LoadArticlesQuery>> {
    const variables: LoadArticlesQueryVariables = {
      nCategory: queryVariables.category,
      nPageRequest: { page: 1, ...(queryVariables.pageRequest ?? {}) },
    };
    return this.query({
      variables,
      query: gql`
        query loadArticles($nCategory: Int!, $nPageRequest: PageRequest!) {
          search_paged_articles(category: $nCategory, pageRequest: $nPageRequest) {
            total
            page
            size
            items {
              id
              title
              content
              introduction
              thumbnail
              category {
                id
              }
            }
          }
        }
      `,
    });
  }
*/
}
