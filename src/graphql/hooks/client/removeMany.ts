import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const removeManyClient = graphql(`
  mutation removeManyClient($idListInput: IdListInput!) {
    removeManyClient(idListInput: $idListInput)
  }
`);

export const useRemoveManyClient = () => {
  return useMutation(removeManyClient);
};
