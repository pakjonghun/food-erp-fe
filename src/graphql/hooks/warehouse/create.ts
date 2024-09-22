import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const createWarehouse = graphql(`
  mutation createWarehouse($createWarehouseInput: CreateWarehouseInput!) {
    createWarehouse(createWarehouseInput: $createWarehouseInput) {
      id
      name
      address
      note
      phoneNumber
    }
  }
`);

export const useCreateWarehouse = () => {
  return useMutation(createWarehouse, {
    update: (cache, { data }) => {
      const newCategory = data?.createWarehouse;
      if (!newCategory) {
        return;
      }
      cache.modify({
        fields: {
          warehouses: ({ totalCount, data } = { totalCount: 0, data: [] }) => {
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
