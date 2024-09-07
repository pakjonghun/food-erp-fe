'use client';

import { FC, ReactNode } from 'react';
import { Box, Drawer, IconButton, Stack, Theme } from '@mui/material';
import { useReactiveVar } from '@apollo/client';
import { navExpand, navOpen } from '@/store/global';
import { useTheme } from '@emotion/react';
import Iconify from '../icon/Iconify';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';

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

  const handleExpandNav = () => {
    navExpand(!isNavExpand);
  };

  return (
    <Box component="main" sx={{ height: '100dvh', display: 'flex' }}>
      <Drawer
        variant="permanent"
        anchor="left"
        open={isNavOpen}
        component="nav"
        PaperProps={{
          sx: {
            width: navWidthVar,
            transition: theme.transitions.create('width', {
              easing: 'var(--transition-easing)',
              duration: 'var(--transition-duration)',
            }),
          },
        }}
        sx={{
          zIndex: (theme) => theme.zIndex.appBar + 1,
          display: {
            xs: isNavOpen ? 'block' : 'none',
            md: 'block',
          },
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          sx={{
            pl: 1,
            justifyContent: 'flex-end',
            height: 'var(--header-height)',
          }}
        >
          {isNavExpand && (
            <Image alt="logo" src={logo} width={70} style={{ marginRight: 'auto' }} />
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
          pl: navWidthVar,
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
