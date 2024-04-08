import { useMutation } from '@apollo/client';
import { graphql } from '../codegen';
import { UserFragment } from '../fragments/userFragment';

const createUserDocument = graphql(`
  mutation CreateUser($createUserInput: CreateUserDTO!) {
    createUser(createUserInput: $createUserInput) {
      id
      role
      createdAt
    }
  }
`);

export const useCreateAccount = () => {
  return useMutation(createUserDocument, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          users(existingUsers = []) {
            if (!data?.createUser) return existingUsers;
            const newUser = cache.writeFragment({
              data: data.createUser,
              fragment: UserFragment,
            });

            return [newUser, ...existingUsers];
          },
        },
      });
    },
  });
};
