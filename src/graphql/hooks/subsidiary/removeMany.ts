import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const removeManySubsidiary = graphql(`
  mutation removeManySubsidiary($idListInput: IdListInput!) {
    removeManySubsidiary(idListInput: $idListInput)
  }
`);

export const useRemoveManySubsidiary = () => {
  return useMutation(removeManySubsidiary);
};
