import { graphql } from '@/graphql/codegen';
import { useQuery } from '@apollo/client';

const products = graphql(`
  query products {
    products {
      totalCount
      data {
        id
        name
        wonPrice
        leadTime
      }
    }
  }
`);

export const useProducts = () => {
  return useQuery(products);
};
