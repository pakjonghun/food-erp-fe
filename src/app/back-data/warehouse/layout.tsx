'use client';

import { FC, ReactNode } from 'react';
import BackDataLayout from '@/layout/backData/BackDataLayout';
import { Box, Button } from '@mui/material';
import Link from 'next/link';
import Iconify from '@/components/icon/Iconify';
import { useReactiveVar } from '@apollo/client';
import { canBack } from '@/store/layout';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const back = useReactiveVar(canBack);

  const actionSection = (
    <Button
      href="/back-data/warehouse/new"
      component={Link}
      startIcon={<Iconify icon="ic:baseline-plus" width={18} />}
    >
      창고 등록
    </Button>
  );

  return (
    <BackDataLayout actionSection={!back && actionSection}>
      <Box sx={{ flexGrow: 1, height: 3, pb: 3 }}>{children}</Box>
    </BackDataLayout>
  );
};

export default Layout;
