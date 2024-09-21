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
        salePrice
        barCode
        leadTime
        deliveryType
        category {
          id
          name
        }
      }
    }
  }
`);

export const useProducts = () => {
  return useQuery(products);
};
