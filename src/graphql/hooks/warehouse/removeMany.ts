import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const removeManyWarehouse = graphql(`
  mutation removeManyWarehouse($idListInput: IdListInput!) {
    removeManyWarehouse(idListInput: $idListInput)
  }
`);

export const useRemoveManyWarehouse = () => {
  return useMutation(removeManyWarehouse);
};
