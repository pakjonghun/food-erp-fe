import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const removeManyClientType = graphql(`
  mutation removeManyClientType($idListInput: IdListInput!) {
    removeManyClientType(idListInput: $idListInput)
  }
`);

export const useRemoveManyClientType = () => {
  return useMutation(removeManyClientType);
};
