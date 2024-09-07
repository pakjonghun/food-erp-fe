import { FC, ReactNode } from 'react';
import PrivateHeader from '@/components/header/PrivateHeader';
import WithNavLayout from '@/components/layout/WithNavLayout';
import BaseNav from '@/components/navigation/BaseNav';

interface Props {
  children: ReactNode;
}

const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <WithNavLayout nav={<BaseNav />} header={<PrivateHeader />}>
      {children}
    </WithNavLayout>
  );
};

export default DashboardLayout;
