import { FC, ReactNode } from 'react';
import PrivateHeader from '@/components/header/PrivateHeader';
import WithNavLayout from '@/components/layout/WithNavLayout';
import BaseNav from '@/components/nav/BaseNav';

interface Props {
  children: ReactNode;
}

const BackDataLayout: FC<Props> = ({ children }) => {
  return (
    <WithNavLayout nav={<BaseNav />} header={<PrivateHeader />}>
      {children}
    </WithNavLayout>
  );
};

export default BackDataLayout;
