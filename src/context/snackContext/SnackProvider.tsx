'use client';

import { createContext, FC, ReactNode, useCallback, useContext, useState } from 'react';
import { SnackState, SnackStateAction } from './type';
import { Alert, AlertTitle, Snackbar } from '@mui/material';

const SnackContext = createContext<null | SnackStateAction>(null);

interface Props {
  children: ReactNode;
}

const SnackProvider: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [{ message, variant, title }, setSnackState] = useState<SnackState>({
    message: '',
    title: '',
    variant: 'info',
  });

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleSetSnackState = useCallback((item: SnackState) => {
    setSnackState(item);
    setOpen(true);
  }, []);

  return (
    <SnackContext.Provider value={{ setSnackState: handleSetSnackState }}>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity={variant} onClick={handleClose} variant="standard">
          {!!title && <AlertTitle>{title}</AlertTitle>}
          {message}
        </Alert>
      </Snackbar>

      {children}
    </SnackContext.Provider>
  );
};

export default SnackProvider;

export const useSnack = () => {
  const snackContext = useContext(SnackContext);
  if (!snackContext) {
    throw new Error('snack state is not exists');
  }
  return snackContext.setSnackState;
};
