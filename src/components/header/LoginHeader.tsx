'use client';

import { AppBar, styled, Toolbar } from '@mui/material';
import MainTitle from './base/MainTitle';
import Image from 'next/image';
import HeaderLogo from './base/HeaderLogo';

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
        {/* <Image
          height={20}
          src={'/assets/images/logo.png'}
          alt="logo"
          width={70}
          style={{ marginRight: '20px' }}
        /> */}
        <HeaderLogo />
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
  borderColor: theme.palette.divider,
  background: theme.palette.background.paper,
  flex: '0 0  auto',
  boxShadow: theme.shadows[0],
}));
