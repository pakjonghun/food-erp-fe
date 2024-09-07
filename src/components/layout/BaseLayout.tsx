'use client';

import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';

interface Props {
  header: ReactNode;
  children: ReactNode;
}

const BaseLayout: FC<Props> = ({ header, children }) => {
  return (
    <Box component="main">
      <Box component="section" sx={{ display: 'flex', flexDirection: 'column', height: '100dvh' }}>
        {header}
        {children}
      </Box>
    </Box>
  );
};

export default BaseLayout;
