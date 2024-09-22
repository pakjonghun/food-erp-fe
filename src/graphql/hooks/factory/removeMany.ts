import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const removeManyFactory = graphql(`
  mutation removeManyFactory($idListInput: IdListInput!) {
    removeManyFactory(idListInput: $idListInput)
  }
`);

export const useRemoveManyFactory = () => {
  return useMutation(removeManyFactory);
};
