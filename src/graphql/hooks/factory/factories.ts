import { graphql } from '@/graphql/codegen';
import { useQuery } from '@apollo/client';

const factories = graphql(`
  query factories {
    factories {
      totalCount
      data {
        id
        name
        address
        note
        phoneNumber
      }
    }
  }
`);

export const useFactories = () => {
  return useQuery(factories);
};
