'use client';

import FormStack from '@/components/form/FormStack';
import { useSnack } from '@/context/snackContext/SnackProvider';
import { useCreateClientType } from '@/graphql/hooks/clientType/create';
import { IdNameForm, idNameSchema } from '@/validations/idName';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack, TextField } from '@mui/material';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

interface Props {
  onClose: () => void;
  onSuccess: (newItem: IdNameForm) => void;
}

const NewClientType: FC<Props> = ({ onClose, onSuccess }) => {
  const methods = useForm<IdNameForm>({
    resolver: zodResolver(idNameSchema),
    defaultValues: { id: '', name: '' },
    mode: 'onChange',
  });

  const snack = useSnack();
  const [create, { loading: creating }] = useCreateClientType();
  const onSubmit = () => {
    const values = methods.getValues();
    create({
      variables: {
        createClientTypeInput: values,
      },
      onCompleted: () => {
        snack({ message: '거래처 타입 등록이 완료되었습니다.', variant: 'success' });
        onSuccess(values);
        onClose();
      },
      onError: (err) => {
        const errorMessage = err.message;
        snack({ message: errorMessage ?? '거래처 타입 등록이 실패하였습니다.', variant: 'error' });
      },
    });
  };
  return (
    <Stack
      sx={{
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
      }}
      gap={1}
    >
      <FormStack sx={{ flex: 1, gap: 1 }}>
        <Controller
          control={methods.control}
          name="id"
          render={({ field, fieldState }) => {
            const errorMessage = fieldState.error?.message ?? '';
            return (
              <TextField
                {...field}
                helperText={errorMessage}
                error={!!errorMessage}
                sx={{ flex: 1 }}
                placeholder="거래처 타입 코드"
              />
            );
          }}
        />
        <Controller
          control={methods.control}
          name="name"
          render={({ field, fieldState }) => {
            const errorMessage = fieldState.error?.message ?? '';
            return (
              <TextField
                {...field}
                helperText={errorMessage}
                error={!!errorMessage}
                sx={{ flex: 1 }}
                placeholder="거래처 타입 이름"
              />
            );
          }}
        />
      </FormStack>
      <Button
        sx={{ height: 37.13 }}
        onClick={onClose}
        variant="outlined"
        disabled={creating}
        size="small"
      >
        취소
      </Button>
      <Button
        sx={{ height: 37.13 }}
        onClick={onSubmit}
        disabled={creating || Object.keys(methods.formState.errors).length > 0}
        size="small"
      >
        생성
      </Button>
    </Stack>
  );
};

export default NewClientType;
