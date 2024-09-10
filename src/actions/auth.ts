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
    return false;
  }
};

export const logout = async (failedAction: () => void) => {
  const res = await fetch('/local/logout', { credentials: 'include' });
  if (!res.ok) {
    failedAction();
    return;
  }
  const result = await res.json();
  return result;
};
