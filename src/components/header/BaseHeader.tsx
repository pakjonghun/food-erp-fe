'use client';

import { AppBar, styled, Toolbar } from '@mui/material';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const BaseHeader: FC<Props> = ({ children }) => {
  return (
    <CustomAppBar>
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
        <Image alt="logo" src={logo} width={70} />
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
