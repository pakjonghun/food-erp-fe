import { FC, ReactNode } from 'react';
import PrivateHeader from '@/components/header/PrivateHeader';
import BaseLayout from '@/components/layout/BaseLayout';
import BaseNav from '@/components/navigation/BaseNav';
import WithNavLayout from '@/components/layout/WithNavLayout';

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
