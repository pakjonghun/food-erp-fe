import { gql, useMutation, useQuery } from '@apollo/client';
import { LoginInput } from '../codegen/graphql';

const login = gql`
  mutation login($loginInput: LoginInput!) {
    login(loginInput: $loginInput)
  }
`;

export const useLogin = (loginInput: LoginInput) => {
  return useMutation(login, {
    variables: {
      loginInput,
    },
  });
};
