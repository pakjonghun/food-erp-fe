import { FC, ReactNode } from 'react';
import PrivateHeader from '@/components/header/PrivateHeader';
import BaseLayout from '@/components/layout/BaseLayout';

interface Props {
  children: ReactNode;
}

const DashboardLayout: FC<Props> = ({ children }) => {
  return <BaseLayout header={<PrivateHeader />}>{children}</BaseLayout>;
};

export default DashboardLayout;
