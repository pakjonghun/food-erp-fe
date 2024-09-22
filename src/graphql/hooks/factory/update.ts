import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

const updateFactory = graphql(`
  mutation updateFactory($updateFactoryInput: UpdateFactoryInput!) {
    updateFactory(updateFactoryInput: $updateFactoryInput) {
      id
      name
      address
      note
      phoneNumber
    }
  }
`);

export const useUpdateFactory = () => {
  return useMutation(updateFactory);
};
