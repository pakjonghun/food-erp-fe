import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const createSubsidiaryCategory = graphql(`
  mutation createSubsidiaryCategory(
    $createSubsidiaryCategoryInput: CreateSubsidiaryCategoryInput!
  ) {
    createSubsidiaryCategory(createSubsidiaryCategoryInput: $createSubsidiaryCategoryInput) {
      id
      name
    }
  }
`);

export const useCreateSubsidiaryCategory = () => {
  return useMutation(createSubsidiaryCategory, {
    update: (cache, { data }) => {
      const newCategory = data?.createSubsidiaryCategory;
      if (!newCategory) {
        return;
      }
      cache.modify({
        fields: {
          subsidiaryCategories: ({ totalCount, data } = { totalCount: 0, data: [] }) => {
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
