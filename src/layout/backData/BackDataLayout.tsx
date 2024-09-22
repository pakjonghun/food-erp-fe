'use client';

import { FC, ReactNode } from 'react';
import BasicBreadCrumbs from '@/components/breadCrumb/IconBreadcrumbs';
import useBread from '@/hooks/useBread';
import { bread, canBack, title } from '@/store/layout';
import { useReactiveVar } from '@apollo/client';
import { IconButton, Stack, Typography } from '@mui/material';
import Iconify from '@/components/icon/Iconify';
import { useRouter } from 'next/navigation';
import WithHeaderLayout from '@/components/layout/WithHeaderLayout';

interface Props {
  actionSection: ReactNode;
  children: ReactNode;
}

const BackDataLayout: FC<Props> = ({ actionSection, children }) => {
  const subTitle = useReactiveVar(title);
  const breadList = useReactiveVar(bread);
  const back = useReactiveVar(canBack);
  const router = useRouter();
  useBread();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <WithHeaderLayout
      headerSection={
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
      }
      actionSection={actionSection}
      breadSection={<BasicBreadCrumbs breadList={breadList} />}
    >
      {children}
    </WithHeaderLayout>
  );
};

export default BackDataLayout;
