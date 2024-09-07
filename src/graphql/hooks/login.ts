import { useMutation } from '@apollo/client';
import { graphql } from '../codegen';

const login = graphql(`
  mutation login($loginInput: LoginInput!) {
    login(loginInput: $loginInput)
  }
`);

export const useLogin = () => {
  return useMutation(login);
};
