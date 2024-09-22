import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const updateSubsidiary = graphql(`
  mutation updateSubsidiary($updateSubsidiaryInput: UpdateSubsidiaryInput!) {
    updateSubsidiary(updateSubsidiaryInput: $updateSubsidiaryInput) {
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

export const useUpdateSubsidiary = () => {
  return useMutation(updateSubsidiary);
};
