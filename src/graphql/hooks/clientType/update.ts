import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const updateClientType = graphql(`
  mutation updateClientType($updateClientTypeInput: UpdateClientTypeInput!) {
    updateClientType(updateClientTypeInput: $updateClientTypeInput) {
      id
      name
    }
  }
`);

export const useUpdateClientType = () => {
  return useMutation(updateClientType);
};
