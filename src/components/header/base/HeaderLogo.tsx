'use client';

import { navExpand, navOpen } from '@/store/nav';
import { useReactiveVar } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { Theme, useMediaQuery } from '@mui/material';
import Image from 'next/image';

const HeaderLogo = () => {
  const theme = useTheme() as Theme;
  const isNavOpen = useReactiveVar(navOpen);
  const isNavExpand = useReactiveVar(navExpand);
  const isUpLg = useMediaQuery(theme.breakpoints.up('md'));

  if (isNavOpen && isUpLg && !isNavExpand) {
    return (
      <Image
        priority
        src={'/assets/images/logo.png'}
        alt="logo"
        width={70}
        height={20}
        style={{ marginRight: '20px' }}
      />
    );
  }

  return <></>;
};

export default HeaderLogo;
