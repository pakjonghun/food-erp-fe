import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const updateSubsidiaryCategory = graphql(`
  mutation updateSubsidiaryCategory(
    $updateSubsidiaryCategoryInput: UpdateSubsidiaryCategoryInput!
  ) {
    updateSubsidiaryCategory(updateSubsidiaryCategoryInput: $updateSubsidiaryCategoryInput) {
      id
      name
    }
  }
`);

export const useUpdateSubsidiaryCategory = () => {
  return useMutation(updateSubsidiaryCategory);
};
