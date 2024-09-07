'use client';

import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';
import { useReactiveVar } from '@apollo/client';
import { isNavExpand, isNavOpen } from '@/store/global';

interface Props {
  nav: ReactNode;
  header: ReactNode;
  children: ReactNode;
}

const WithNavLayout: FC<Props> = ({ header, nav, children }) => {
  const open = useReactiveVar(isNavOpen);
  const expand = useReactiveVar(isNavExpand);
  const navWidth = expand ? 'var(--nav-width)' : 'var(--nav_mini_width)';
  const navWidthVar = open ? navWidth : 0;

  return (
    <Box component="main" sx={{ height: '100dvh' }}>
      <Box component="nav" sx={{ width: navWidthVar }}>
        {nav}
      </Box>
      <Box
        component="section"
        sx={{ display: 'flex', flexDirection: 'column', height: '100dvh', pl: navWidthVar }}
      >
        {header}
        {children}
      </Box>
    </Box>
  );
};

export default WithNavLayout;
