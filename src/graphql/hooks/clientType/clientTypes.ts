import { graphql } from '@/graphql/codegen';
import { useQuery } from '@apollo/client';

const clientTypes = graphql(`
  query clientTypes {
    clientTypes {
      totalCount
      data {
        id
        name
      }
    }
  }
`);

export const useClientTypes = () => {
  return useQuery(clientTypes);
};
