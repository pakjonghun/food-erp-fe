import React, { FC, ReactNode } from 'react';
import BaseLayout from '@/components/layout/BaseLayout';
import LoginHeader from '@/components/header/LoginHeader';

interface Props {
  children: ReactNode;
}

const LoginLayout: FC<Props> = ({ children }) => {
  return <BaseLayout header={<LoginHeader />}>{children}</BaseLayout>;
};

export default LoginLayout;
