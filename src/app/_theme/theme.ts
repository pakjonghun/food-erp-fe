'use client';

import { Roboto } from 'next/font/google';
import { Components, createTheme } from '@mui/material/styles';
import { alpha, inputBaseClasses, inputLabelClasses, Theme, Typography } from '@mui/material';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const MuiInputBase: Components<Theme>['MuiInputBase'] = {
  defaultProps: {
    size: 'small',
    autoComplete: 'off',
  },
  styleOverrides: {
    input: ({ theme }) => ({
      ...theme.typography.body2,
    }),
  },
};

const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
  styleOverrides: {
    notchedOutline: ({ theme }) => ({
      borderColor: alpha(theme.palette.divider, 0.2),
      transition: theme.transitions.create(['border-color'], {
        duration: theme.transitions.duration.shortest,
      }),
    }),
  },
};

const MuiFormLabel: Components<Theme>['MuiFormLabel'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.body2,
      color: theme.palette.text.disabled,
      fontWeight: 600,
    }),
  },
};

const MuiFormControlLabel: Components<Theme>['MuiFormControlLabel'] = {
  styleOverrides: {
    root: ({ theme }) => ({ ...theme.typography.body2 }),
  },
};

const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    disableRipple: true,
    disableElevation: true,
    variant: 'contained',
  },
  styleOverrides: {
    root: ({ theme }) => ({ fontFamily: theme.typography.fontFamily }),
  },
};

const MuiAppBar: Components<Theme>['MuiAppBar'] = {
  styleOverrides: {
    root: { boxShadow: 'none' },
  },
};

const MuiDrawer: Components<Theme>['MuiDrawer'] = {
  styleOverrides: {
    paperAnchorRight: ({ theme }) => ({
      boxShadow: `-40px 40px 80px -8px ${alpha(theme.palette.grey[500], 0.24)}`,
    }),
    paperAnchorLeft: ({ theme }) => ({
      boxShadow: `-40px 40px 80px -8px ${alpha(theme.palette.grey[500], 0.24)}`,
    }),
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#6B7280',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  shape: {
    borderRadius: 1,
  },
  components: {
    MuiInputBase,
    MuiOutlinedInput,
    MuiFormLabel,
    MuiFormControlLabel,
    MuiButton,
    MuiAppBar,
    MuiDrawer,
  },
});

export default theme;
