'use client';

import { FC, ReactNode } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/theme/theme';

interface Props {
  children: ReactNode;
}

const MuiThemeProvider: FC<Props> = ({ children }) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default MuiThemeProvider;
