import { AUTH_TOKEN } from '@/constants/auth';
import { PATH } from '@/constants/route';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const Page = () => {
  const cookie = cookies().get(AUTH_TOKEN);
  const nextPath = cookie ? `/${PATH.dashboard.path}` : `/${PATH['sign-in'].path}`;

  redirect(nextPath);
};

export default Page;
