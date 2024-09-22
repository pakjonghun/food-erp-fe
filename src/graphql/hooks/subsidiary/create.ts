import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const createSubsidiary = graphql(`
  mutation createSubsidiary($createSubsidiaryInput: CreateSubsidiaryInput!) {
    createSubsidiary(createSubsidiaryInput: $createSubsidiaryInput) {
      id
      name
      wonPrice
      leadTime
      category {
        id
        name
      }
    }
  }
`);

export const useCreateSubsidiary = () => {
  return useMutation(createSubsidiary, {
    update: (cache, { data }) => {
      if (!data) {
        return;
      }

      const newSubsidiary = data.createSubsidiary;
      cache.modify({
        fields: {
          subsidiaries: ({ totalCount, data } = { totalCount: 0, data: [] }) => {
            return {
              totalCount: totalCount + 1,
              data: [newSubsidiary, ...data],
            };
          },
        },
      });
    },
  });
};
