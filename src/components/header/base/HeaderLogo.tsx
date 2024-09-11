'use client';

import { publicPathList } from '@/constants/route';
import { navExpand, navOpen } from '@/store/nav';
import { useReactiveVar } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { Theme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const HeaderLogo = () => {
  const theme = useTheme() as Theme;
  const isNavOpen = useReactiveVar(navOpen);
  const isNavExpand = useReactiveVar(navExpand);
  const isUpLg = useMediaQuery(theme.breakpoints.up('md'));
  const path = usePathname();
  const isPublic = (publicPathList as string[]).includes(path.replace(/^\/|\/$g/, ''));
  if ((isNavOpen && isUpLg && !isNavExpand) || isPublic) {
    return (
      <Image
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
