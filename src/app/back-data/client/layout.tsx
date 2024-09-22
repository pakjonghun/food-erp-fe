'use client';

import { FC, ReactNode } from 'react';
import RouterTabs from '@/components/tab/RouterTabs';
import { TabType } from '@/components/tab/type';
import BackDataLayout from '@/layout/backData/BackDataLayout';
import { Box, Button } from '@mui/material';
import Link from 'next/link';
import Iconify from '@/components/icon/Iconify';
import { usePathname } from 'next/navigation';
import { useReactiveVar } from '@apollo/client';
import { canBack } from '@/store/layout';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const path = usePathname();
  const back = useReactiveVar(canBack);

  const tabs: TabType[] = [
    {
      label: '거래처',
      value: '/back-data/client',
    },
    {
      label: '타입',
      value: '/back-data/client/type',
    },
  ];

  const isCategory = path.includes(tabs[1].value);
  const actionSection = isCategory ? (
    <Button
      href="/back-data/client/type/new"
      component={Link}
      startIcon={<Iconify icon="ic:baseline-plus" width={18} />}
    >
      타입 등록
    </Button>
  ) : (
    <Button
      href="/back-data/client/new"
      component={Link}
      startIcon={<Iconify icon="ic:baseline-plus" width={18} />}
    >
      거래처 등록
    </Button>
  );

  return (
    <BackDataLayout actionSection={!back && actionSection}>
      {!back && <RouterTabs tabs={tabs} />}
      <Box sx={{ flexGrow: 1, height: 3, pb: 3 }}>{children}</Box>
    </BackDataLayout>
  );
};

export default Layout;
