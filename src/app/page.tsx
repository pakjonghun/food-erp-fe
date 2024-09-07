import { AUTH_TOKEN } from '@/constants/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const Page = () => {
  const cookie = cookies().get(AUTH_TOKEN);
  const nextPath = cookie ? '/dashboard' : '/login';

  redirect(nextPath);
};

export default Page;
