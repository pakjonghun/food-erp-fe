'use client';

import { AppBar, IconButton, styled, Theme, Toolbar, useMediaQuery } from '@mui/material';
import { FC, ReactNode } from 'react';
import HeaderLogo from './HeaderLogo';
import MainTitle from './MainTitle';
import Iconify from '@/components/icon/Iconify';
import { useReactiveVar } from '@apollo/client';
import { navOpen } from '@/store/nav';
import { useTheme } from '@emotion/react';

interface Props {
  children?: ReactNode;
}

const BaseHeader: FC<Props> = ({ children }) => {
  const isOpenNav = useReactiveVar(navOpen);
  const theme = useTheme() as Theme;
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickToggleNav = () => {
    navOpen(!isOpenNav);
  };

  return (
    <CustomAppBar sx={{ height: 'var(--header-height)' }} position="sticky">
      <Toolbar
        variant="dense"
        disableGutters
        sx={{
          color: (theme) => theme.palette.text.primary,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          p: '8px 12px',
        }}
      >
        {isMdDown && (
          <IconButton onClick={handleClickToggleNav}>
            <Iconify icon="mdi:hamburger-menu" />
          </IconButton>
        )}
        <HeaderLogo />
        <MainTitle />
        {children}
      </Toolbar>
    </CustomAppBar>
  );
};

export default BaseHeader;

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderBottom: '1px solid',
  borderColor: theme.palette.divider,
  background: theme.palette.background.paper,
  zIndex: theme.zIndex.drawer + 1,
  flex: '0 0  auto',
  boxShadow: theme.shadows[0],
}));
