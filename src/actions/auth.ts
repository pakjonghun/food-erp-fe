'use server';

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

export const logout = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get(AUTH_TOKEN);

  if (!token) {
    return false;
  } else {
    const isDev = process.env.NODE_ENV == 'development';
    cookieStore.set(AUTH_TOKEN, '', {
      expires: new Date(0),
      httpOnly: true,
      maxAge: 0,
      path: '/',
      sameSite: 'lax',
      secure: isDev,
      domain: isDev ? 'localhost' : process.env.NEXT_PUBLIC_CLOUD_DOMAIN,
    });
  }

  return true;
};
