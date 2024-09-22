'use client';

import { FC, ReactNode } from 'react';
import { Card, CardHeader, Divider, Stack } from '@mui/material';
import { UseFormReturn } from 'react-hook-form';
import Form from '@/components/form/Form';
import FormStack from '@/components/form/FormStack';

interface Props {
  methods: UseFormReturn<any>;
  subHeader: string;
  inputSection: ReactNode;
  actionSection: ReactNode;
  onSubmit: (value: any) => void;
}

const NewLayout: FC<Props> = ({ methods, subHeader, inputSection, actionSection, onSubmit }) => {
  return (
    <Form
      sx={{ maxWidth: 'lg', mx: 'auto', pb: 3 }}
      onSubmit={methods.handleSubmit(onSubmit)}
      methods={methods}
    >
      <Card variant="outlined" sx={{ boxShadow: 1 }}>
        <CardHeader subheader={subHeader} />
        <Divider
          sx={{
            mb: 3,
            boxShadow: 0,
          }}
        />
        <Stack sx={{ gap: 3, mx: 3, mb: 3 }}>{inputSection}</Stack>
      </Card>
      <FormStack
        sx={{
          mt: 3,
          ml: {
            xs: 'none',
            sm: 'auto',
          },
          gap: 1,
        }}
      >
        {actionSection}
      </FormStack>
    </Form>
  );
};

export default NewLayout;
