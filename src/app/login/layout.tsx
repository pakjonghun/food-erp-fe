import BaseHeader from '@/components/header/BaseHeader/BaseHeader';
import BaseLayout from '@/components/layout/BaseLayout';
import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const LoginLayout: FC<Props> = ({ children }) => {
  return <BaseLayout header={<BaseHeader />}>{children}</BaseLayout>;
};

export default LoginLayout;
