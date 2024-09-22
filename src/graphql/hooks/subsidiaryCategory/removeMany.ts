import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const removeManySubsidiaryCategory = graphql(`
  mutation removeManySubsidiaryCategory($idListInput: IdListInput!) {
    removeManySubsidiaryCategory(idListInput: $idListInput)
  }
`);

export const useRemoveManySubsidiaryCategory = () => {
  return useMutation(removeManySubsidiaryCategory);
};
