import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const createProduct = graphql(`
  mutation createProduct($createProductInput: CreateProductInput!) {
    createProduct(createProductInput: $createProductInput) {
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

export const useCreateProduct = () => {
  return useMutation(createProduct, {
    update: (cache, { data }) => {
      if (!data) {
        return;
      }

      const newProduct = data.createProduct;
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
