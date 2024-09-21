'use client';

import { FC, ReactNode } from 'react';
import { Stack } from '@mui/material';

interface Props {
  breadSection: ReactNode;
  headerSection: ReactNode;
  actionSection: ReactNode;
  children: ReactNode;
}

const WithHeaderLayout: FC<Props> = ({ headerSection, breadSection, actionSection, children }) => {
  return (
    <Stack sx={{ flex: 1, mx: 3 }}>
      <Stack sx={{ mt: 2 }} flexDirection="row" justifyContent="space-between">
        {headerSection}
        {actionSection}
      </Stack>
      {breadSection}
      {children}
    </Stack>
  );
};

export default WithHeaderLayout;
