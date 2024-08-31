'use client';

import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#1D232E',
    },
    background: {
      paper: '#F5F6FA',
      default: '#FAFCFF',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.caption,
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            opacity: 0.8,
          },
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        input: {
          padding: 0,
        },
        root: ({ theme }) => ({
          padding: '6px 10px',
          background: theme.palette.background.paper,
          ...theme.typography.body2,
        }),
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: 'body2',
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        size: 'small',
      },
      styleOverrides: {},
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },
  },
});

export default theme;
