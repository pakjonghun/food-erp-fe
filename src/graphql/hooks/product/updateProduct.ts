import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const updateProduct = graphql(`
  mutation updateProduct($updateProductInput: UpdateProductInput!) {
    updateProduct(updateProductInput: $updateProductInput) {
      id
      name
      barCode
      wonPrice
      salePrice
      leadTime
      deliveryType
      category {
        id
        name
      }
    }
  }
`);

export const useUpdateProduct = () => {
  return useMutation(updateProduct);
};
