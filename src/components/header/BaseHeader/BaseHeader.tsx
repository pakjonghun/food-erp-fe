'use client';

import { AppBar, styled, Toolbar } from '@mui/material';
import { FC, ReactNode } from 'react';
import HeaderLogo from './HeaderLogo';
import MainTitle from './MainTitle';

interface Props {
  children?: ReactNode;
}

const BaseHeader: FC<Props> = ({ children }) => {
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
