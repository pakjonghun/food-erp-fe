import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const createFactory = graphql(`
  mutation createFactory($createFactoryInput: CreateFactoryInput!) {
    createFactory(createFactoryInput: $createFactoryInput) {
      id
      name
      address
      note
      phoneNumber
    }
  }
`);

export const useCreateFactory = () => {
  return useMutation(createFactory, {
    update: (cache, { data }) => {
      const newCategory = data?.createFactory;
      if (!newCategory) {
        return;
      }
      cache.modify({
        fields: {
          factories: ({ totalCount, data } = { totalCount: 0, data: [] }) => {
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
