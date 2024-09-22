import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const updateProductCategory = graphql(`
  mutation updateProductCategory($updateProductCategoryInput: UpdateProductCategoryInput!) {
    updateProductCategory(updateProductCategoryInput: $updateProductCategoryInput) {
      id
      name
    }
  }
`);

export const useUpdateProductCategory = () => {
  return useMutation(updateProductCategory);
};
