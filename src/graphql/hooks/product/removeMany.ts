import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const removeManyProduct = graphql(`
  mutation removeManyProduct($idListInput: IdListInput!) {
    removeManyProduct(idListInput: $idListInput)
  }
`);

export const useRemoveManyProduct = () => {
  return useMutation(removeManyProduct);
};
