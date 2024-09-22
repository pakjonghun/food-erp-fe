import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const createProductCategory = graphql(`
  mutation createProductCategory($createProductCategoryInput: CreateProductCategoryInput!) {
    createProductCategory(createProductCategoryInput: $createProductCategoryInput) {
      id
      name
    }
  }
`);

export const useCreateProductCategory = () => {
  return useMutation(createProductCategory, {
    update: (cache, { data }) => {
      const newCategory = data?.createProductCategory;
      if (!newCategory) {
        return;
      }
      cache.modify({
        fields: {
          productCategories: ({ totalCount, data } = { totalCount: 0, data: [] }) => {
            return {
              totalCount: totalCount + 1,
              data: [newCategory, ...data],
            };
          },
        },
      });
    },
  });
};
