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
      label: '제품',
      value: '/back-data/product',
    },
    {
      label: '카테고리',
      value: '/back-data/product/category',
    },
  ];

  const isCategory = path.includes(tabs[1].value);
  const actionSection = isCategory ? (
    <Button
      href="/back-data/product/category/new"
      component={Link}
      startIcon={<Iconify icon="ic:baseline-plus" width={18} />}
    >
      카테고리 등록
    </Button>
  ) : (
    <Button
      href="/back-data/product/new"
      component={Link}
      startIcon={<Iconify icon="ic:baseline-plus" width={18} />}
    >
      제품 등록
    </Button>
  );

  return (
    <BackDataLayout actionSection={!back && actionSection}>
      {!back && <RouterTabs tabs={tabs} />}
      <Box
        sx={{
          flexGrow: 1,
          height: {
            xs: '100vh',
            sm: 3,
          },
          pb: 3,
        }}
      >
        {children}
      </Box>
    </BackDataLayout>
  );
};

export default Layout;
