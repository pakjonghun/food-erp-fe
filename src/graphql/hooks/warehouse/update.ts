import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const updateWarehouse = graphql(`
  mutation updateWarehouse($updateWarehouseInput: UpdateWarehouseInput!) {
    updateWarehouse(updateWarehouseInput: $updateWarehouseInput) {
      id
      name
      address
      note
      phoneNumber
    }
  }
`);

export const useUpdateWarehouse = () => {
  return useMutation(updateWarehouse);
};
