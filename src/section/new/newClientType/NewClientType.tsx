'use client';

import FormStack from '@/components/form/FormStack';
import { useSnack } from '@/context/snackContext/SnackProvider';
import { useCreateClientType } from '@/graphql/hooks/clientType/create';
import { IdNameForm, idNameSchema } from '@/validations/idName';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import NewLayout from '@/layout/new/New';

const NewClientType = () => {
  const router = useRouter();

  const methods = useForm<IdNameForm>({
    resolver: zodResolver(idNameSchema),
    defaultValues: { id: '', name: '' },
  });

  const snack = useSnack();
  const [create, { loading: creating }] = useCreateClientType();

  const handleClose = () => {
    router.back();
  };

  const onSubmit = (values: IdNameForm) => {
    create({
      variables: {
        createClientTypeInput: values,
      },
      onCompleted: () => {
        snack({ message: '타입 등록이 완료되었습니다.', variant: 'success' });
        router.push('/back-data/client/type');
      },
      onError: (err) => {
        const errorMessage = err.message;
        snack({ message: errorMessage ?? '타입 등록이 실패하였습니다.', variant: 'error' });
      },
    });
  };
  return (
    <NewLayout
      methods={methods}
      subHeader="새로운 거래처 타입 정보를 입력합니다."
      onSubmit={onSubmit}
      inputSection={
        <FormStack>
          <Controller
            control={methods.control}
            name="id"
            render={({ field, fieldState }) => {
              const errorMessage = fieldState.error?.message ?? '';
              return (
                <TextField
                  {...field}
                  autoFocus
                  required
                  fullWidth
                  error={!!errorMessage}
                  helperText={errorMessage}
                  label="타입 코드"
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
                  required
                  fullWidth
                  error={!!errorMessage}
                  helperText={errorMessage}
                  label="타입 이름"
                />
              );
            }}
          />
        </FormStack>
      }
      actionSection={
        <>
          <Button disabled={creating} variant="outlined" onClick={handleClose}>
            뒤로가기
          </Button>
          <Button
            disabled={creating || Object.keys(methods.formState.errors).length > 0}
            type="submit"
          >
            타입 등록
          </Button>
        </>
      }
    />
  );
};

export default NewClientType;
