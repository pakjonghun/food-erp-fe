'use client';

import { Theme, useMediaQuery } from '@mui/material';
import { useReactiveVar } from '@apollo/client';
import { navExpand } from '@/store/nav';
import MiniNav from './MiniNav';
import { useTheme } from '@emotion/react';
import WideNav from './WideNav';

const BaseNav = () => {
  const theme = useTheme() as Theme;
  const isNavExpand = useReactiveVar(navExpand);
  const isDownMd = useMediaQuery(theme.breakpoints.down('md'));

  if (isDownMd) {
    return <WideNav />;
  }

  return isNavExpand ? <WideNav /> : <MiniNav />;
};

export default BaseNav;
