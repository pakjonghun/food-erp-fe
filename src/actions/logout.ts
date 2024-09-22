'use server';

import { AUTH_TOKEN } from '@/constants/auth';
import { cookies } from 'next/headers';

export const logout = async () => {
  try {
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

      return true;
    }
  } catch (err: any) {
    return false;
  }
};
