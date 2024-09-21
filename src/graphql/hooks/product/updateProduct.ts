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
  return useMutation(updateProduct, {
    update: (cache, { data }) => {
      if (!data) {
        return;
      }

      const newProduct = data.updateProduct;
      cache.modify({
        fields: {
          products: ({ totalCount, data } = { totalCount: 0, data: [] }) => {
            return {
              totalCount: totalCount + 1,
              data: [newProduct, ...data],
            };
          },
        },
      });
    },
  });
};
