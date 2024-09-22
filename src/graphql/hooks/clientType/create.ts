import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const createClientType = graphql(`
  mutation createClientType($createClientTypeInput: CreateClientTypeInput!) {
    createClientType(createClientTypeInput: $createClientTypeInput) {
      id
      name
    }
  }
`);

export const useCreateClientType = () => {
  return useMutation(createClientType, {
    update: (cache, { data }) => {
      const newCategory = data?.createClientType;
      if (!newCategory) {
        return;
      }
      cache.modify({
        fields: {
          clientTypes: ({ totalCount, data } = { totalCount: 0, data: [] }) => {
            return {
              totalCount: totalCount + 1,
              data: [newCategory, ...data],
            };
          },
        },
      });
    },
  });
};
