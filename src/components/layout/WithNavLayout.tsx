'use client';

import { FC, ReactNode, useEffect } from 'react';
import { Box, Drawer, IconButton, Stack, Theme, useMediaQuery } from '@mui/material';
import { useReactiveVar } from '@apollo/client';
import { navExpand, navOpen } from '@/store/nav';
import { useTheme } from '@emotion/react';
import Iconify from '../icon/Iconify';
import Image from 'next/image';

interface Props {
  nav: ReactNode;
  header: ReactNode;
  children: ReactNode;
}

const WithNavLayout: FC<Props> = ({ header, nav, children }) => {
  const isNavOpen = useReactiveVar(navOpen);
  const isNavExpand = useReactiveVar(navExpand);
  const navWidth = isNavExpand ? 'var(--nav-width)' : 'var(--nav-mini-width)';
  const navWidthVar = isNavOpen ? navWidth : 0;
  const theme = useTheme() as Theme;
  const isDownMd = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (isDownMd) {
      navOpen(false);
    } else {
      navOpen(true);
    }
  }, [isDownMd]);

  const handleExpandNav = () => {
    if (isDownMd) {
      navOpen(!isNavOpen);
    } else {
      navExpand(!isNavExpand);
    }
  };

  const handleCloseMenu = () => {
    navOpen(false);
  };

  return (
    <Box
      component="main"
      sx={{
        height: '100dvh',
        display: 'flex',
      }}
    >
      <Drawer
        variant={isDownMd ? 'temporary' : 'permanent'}
        onClose={handleCloseMenu}
        anchor="left"
        open={isNavOpen}
        component="nav"
        PaperProps={{
          sx: {
            width: {
              xs: 'var(--nav-width)',
              md: navWidthVar,
            },
            transition: theme.transitions.create('width', {
              easing: 'var(--transition-easing)',
              duration: 'var(--transition-duration)',
            }),
          },
        }}
        sx={{
          width: {
            xs: isNavOpen ? 'var(--nav-width)' : 0,
            md: 0,
          },
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          sx={{
            pl: 1,
            justifyContent: {
              xs: 'flex-end',
              md: !isNavExpand ? 'center' : 'flex-end',
            },
            height: 'var(--header-height)',
          }}
        >
          {isNavExpand && (
            <Image
              height={20}
              alt="logo"
              src={'/assets/images/logo.png'}
              width={70}
              style={{ marginRight: 'auto' }}
            />
          )}
          <IconButton onClick={handleExpandNav}>
            <Iconify icon={isNavExpand ? 'mingcute:left-line' : 'mingcute:right-line'} width={18} />
          </IconButton>
        </Stack>
        {nav}
      </Drawer>
      <Box
        component="section"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          height: '100dvh',
          pl: isDownMd ? 0 : navWidthVar,
          transition: theme.transitions.create('padding-left', {
            easing: 'var(--transition-easing)',
            duration: 'var(--transition-duration)',
          }),
        }}
      >
        {header}
        {children}
      </Box>
    </Box>
  );
};

export default WithNavLayout;
