import { AUTH_TOKEN } from '@/constants/auth';
import { client } from '@/graphql/client/apolloClient';
import { gql } from '@apollo/client';

const AUTH_MUTATION = gql`
  mutation {
    auth
  }
`;

export const auth = async (token: string) => {
  try {
    const result = await client.mutate({
      mutation: AUTH_MUTATION,
      context: {
        headers: {
          cookie: `${AUTH_TOKEN}=${token}`,
        },
      },
    });

    return result.data?.auth;
  } catch (err) {
    console.error('erro', err);
    return false;
  }
};
