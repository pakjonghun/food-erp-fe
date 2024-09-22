import { graphql } from '@/graphql/codegen';
import { useQuery } from '@apollo/client';

const subsidiaryCategories = graphql(`
  query subsidiaryCategories {
    subsidiaryCategories {
      totalCount
      data {
        id
        name
      }
    }
  }
`);

export const useSubsidiaryCategories = () => {
  return useQuery(subsidiaryCategories);
};
