import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const removeManyProductCategory = graphql(`
  mutation removeManyProductCategory($idListInput: IdListInput!) {
    removeManyProductCategory(idListInput: $idListInput)
  }
`);

export const useRemoveManyProductCategory = () => {
  return useMutation(removeManyProductCategory);
};
