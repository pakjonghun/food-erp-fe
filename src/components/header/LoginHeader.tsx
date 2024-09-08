'use client';

import { AppBar, styled, Toolbar } from '@mui/material';
import MainTitle from './base/MainTitle';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';

const LoginHeader = () => {
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
        <Image
          height={20}
          src={'/assets/images/logo.png'}
          alt="logo"
          width={70}
          style={{ marginRight: '20px' }}
        />
        <MainTitle />
      </Toolbar>
    </CustomAppBar>
  );
};

export default LoginHeader;

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
