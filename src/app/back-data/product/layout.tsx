'use client';

import { FC, ReactNode } from 'react';
import IconBreadcrumbs from '@/components/breadCrumb/IconBreadcrumbs';
import { BasicTabs } from '@/components/tab/BaseTabs';
import { TabType } from '@/components/tab/type';
import useBread from '@/hooks/useBread';
import { bread, title } from '@/store/layout';
import { useReactiveVar } from '@apollo/client';
import { Stack, Typography } from '@mui/material';

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

  return (
    <Stack sx={{ flex: 1, mx: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, mt: 2 }}>
        {subTitle}
      </Typography>
      <IconBreadcrumbs breadList={breadList} />
      <BasicTabs tabs={tabs} />
    </Stack>
  );
};

export default ProductLayout;
