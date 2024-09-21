'use client';

import { FC, ReactNode } from 'react';
import BasicBreadCrumbs from '@/components/breadCrumb/IconBreadcrumbs';
import { BasicTabs } from '@/components/tab/BaseTabs';
import { TabType } from '@/components/tab/type';
import useBread from '@/hooks/useBread';
import { bread, canBack, title } from '@/store/layout';
import { useReactiveVar } from '@apollo/client';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import Iconify from '@/components/icon/Iconify';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Props {
  category: ReactNode;
  children: ReactNode;
}

const ProductLayout: FC<Props> = ({ children, category }) => {
  useBread();
  const tabs: TabType[] = [
    {
      label: '제품',
      value: 0,
      children,
    },
    {
      label: '카테고리',
      value: 1,
      children: category,
    },
  ];

  const subTitle = useReactiveVar(title);
  const breadList = useReactiveVar(bread);
  const back = useReactiveVar(canBack);
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Stack sx={{ flex: 1, mx: 3 }}>
      <Stack sx={{ mt: 2 }} flexDirection="row" justifyContent="space-between">
        <Stack flexDirection="row" gap={2} alignItems="center">
          {back && (
            <IconButton onClick={handleBackClick} size="small">
              <Iconify icon="material-symbols:arrow-back" width={18} />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {subTitle}
          </Typography>
        </Stack>
        <Button
          href="/back-data/product/new"
          component={Link}
          startIcon={<Iconify icon="ic:baseline-plus" width={18} />}
        >
          제품등록
        </Button>
      </Stack>
      <BasicBreadCrumbs breadList={breadList} />
      <BasicTabs tabs={tabs} />
    </Stack>
  );
};

export default ProductLayout;
