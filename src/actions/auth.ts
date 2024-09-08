import { AUTH_TOKEN } from '@/constants/auth';
import { client } from '@/graphql/client/apolloClient';
import { gql } from '@apollo/client';
import { cookies } from 'next/headers';

const AUTH_MUTATION = gql`
  mutation {
    auth
  }
`;

export const auth = async (token: string) => {
  console.log('auth api token', token);
  try {
    const result = await client.mutate({
      mutation: AUTH_MUTATION,
      context: {
        headers: {
          cookies: `${AUTH_TOKEN}=${token}`,
          cookie: `${AUTH_TOKEN}=${token}`,
        },
      },
    });
    console.log('auth api result', result, `${AUTH_TOKEN}=${token}`);
    return result.data?.auth;
  } catch (err) {
    console.error('erro', err);
    return false;
  }
};
