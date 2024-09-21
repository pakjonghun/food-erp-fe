import { FC, ReactNode } from 'react';
import { Stack, SxProps } from '@mui/material';
import { UseFormReturn } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';

interface Props {
  children: ReactNode;
  methods: UseFormReturn<any>;
  sx?: SxProps;
  onSubmit?: () => void;
}

const Form: FC<Props> = ({ children, methods, onSubmit, sx }) => {
  return (
    <FormProvider {...methods}>
      <Stack
        component="form"
        flexDirection="column"
        onSubmit={onSubmit}
        noValidate
        autoComplete="off"
        sx={sx}
      >
        {children}
      </Stack>
    </FormProvider>
  );
};

export default Form;
