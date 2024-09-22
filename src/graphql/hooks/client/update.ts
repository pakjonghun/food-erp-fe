import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const updateClient = graphql(`
  mutation updateClient($updateClientInput: UpdateClientInput!) {
    updateClient(updateClientInput: $updateClientInput) {
      id
      name
      isSabangService
      feeRate
      businessName
      businessNumber
      payDate
      manager
      managerTel
      inActive
      clientType {
        id
        name
      }
    }
  }
`);

export const useUpdateClient = () => {
  return useMutation(updateClient);
};
