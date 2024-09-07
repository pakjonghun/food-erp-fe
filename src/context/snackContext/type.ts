import { AlertColor } from '@mui/material';

export type SnackState = {
  message?: string;
  title?: string;
  variant?: AlertColor;
};

export type SnackStateAction = {
  setSnackState: (value: SnackState) => void;
};
