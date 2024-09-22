import { graphql } from '@/graphql/codegen';
import { useQuery } from '@apollo/client';

const subsidiaries = graphql(`
  query subsidiaries {
    subsidiaries {
      totalCount
      data {
        id
        name
        wonPrice
        leadTime
        category {
          id
          name
        }
      }
    }
  }
`);

export const useSubsidiaries = () => {
  return useQuery(subsidiaries);
};
