import { graphql } from '@/graphql/codegen';
import { useQuery } from '@apollo/client';

const warehouses = graphql(`
  query warehouses {
    warehouses {
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

export const useWarehouses = () => {
  return useQuery(warehouses);
};
