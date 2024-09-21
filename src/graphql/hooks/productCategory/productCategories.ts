import { graphql } from '@/graphql/codegen';
import { useQuery } from '@apollo/client';

const productCategories = graphql(`
  query productCategories {
    productCategories {
      totalCount
      data {
        id
        name
      }
    }
  }
`);

export const useProductCategories = () => {
  return useQuery(productCategories);
};
