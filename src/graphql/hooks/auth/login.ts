import { graphql } from '@/graphql/codegen';
import { useMutation } from '@apollo/client';

export const login = graphql(`
  mutation login($loginInput: LoginInput!) {
    login(loginInput: $loginInput)
  }
`);

export const useLogin = () => {
  return useMutation(login);
};
