import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const createClient = graphql(`
  mutation createClient($createClientInput: CreateClientInput!) {
    createClient(createClientInput: $createClientInput) {
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

export const useCreateClient = () => {
  return useMutation(createClient, {
    update: (cache, { data }) => {
      if (!data) {
        return;
      }

      const newClient = data.createClient;
      cache.modify({
        fields: {
          subsidiaries: ({ totalCount, data } = { totalCount: 0, data: [] }) => {
            return {
              totalCount: totalCount + 1,
              data: [newClient, ...data],
            };
          },
        },
      });
    },
  });
};
