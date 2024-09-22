'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { NewFactoryForm, newFactorySchema } from './validate';
import FormStack from '@/components/form/FormStack';
import { useRouter } from 'next/navigation';
import { useSnack } from '@/context/snackContext/SnackProvider';
import NewLayout from '@/layout/new/New';
import { useCreateFactory } from '@/graphql/hooks/factory/create';

const NewFactory = () => {
  const snack = useSnack();
  const router = useRouter();
  const [create, { loading: creating }] = useCreateFactory();

  const methods = useForm<NewFactoryForm>({
    resolver: zodResolver(newFactorySchema),
    defaultValues: {
      id: '',
      name: '',
      address: '',
      note: '',
      phoneNumber: '',
    },
  });

  const handleClickCancel = () => {
    router.back();
  };

  const onSubmit = (value: NewFactoryForm) => {
    create({
      variables: {
        createFactoryInput: {
          id: value.id,
          name: value.name,
          address: value.address,
          note: value.note,
          phoneNumber: value.phoneNumber,
        },
      },
      onCompleted: () => {
        snack({ message: '공장 등록이 완료되었습니다.', variant: 'success' });
        router.push('/back-data/factory');
      },
      onError: (err) => {
        const errMessage = err?.message;
        snack({ message: errMessage ?? '공장 등록이 실패했습니다.', variant: 'error' });
      },
    });
  };

  return (
    <NewLayout
      methods={methods}
      subHeader="새로운 공장 정보를 입력합니다."
      onSubmit={onSubmit}
      inputSection={
        <>
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
                    label="공장 코드"
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
                    label="공장 이름"
                  />
                );
              }}
            />
          </FormStack>
          <FormStack>
            <Controller
              control={methods.control}
              name="address"
              render={({ field, fieldState }) => {
                const errorMessage = fieldState.error?.message ?? '';
                return (
                  <TextField
                    {...field}
                    fullWidth
                    error={!!errorMessage}
                    helperText={errorMessage}
                    label="공장 주소"
                  />
                );
              }}
            />

            <Controller
              control={methods.control}
              name="phoneNumber"
              render={({ field, fieldState }) => {
                const errorMessage = fieldState.error?.message ?? '';
                return (
                  <TextField
                    {...field}
                    fullWidth
                    error={!!errorMessage}
                    helperText={errorMessage}
                    label="공장 연락처"
                  />
                );
              }}
            />
          </FormStack>

          <Controller
            control={methods.control}
            name="note"
            render={({ field, fieldState }) => {
              const errorMessage = fieldState.error?.message ?? '';
              return (
                <TextField
                  {...field}
                  fullWidth
                  error={!!errorMessage}
                  helperText={errorMessage}
                  label="비고"
                />
              );
            }}
          />
        </>
      }
      actionSection={
        <>
          <Button disabled={creating} variant="outlined" onClick={handleClickCancel}>
            뒤로가기
          </Button>
          <Button
            disabled={creating || Object.keys(methods.formState.errors).length > 0}
            type="submit"
          >
            공장 등록
          </Button>
        </>
      }
    />
  );
};

export default NewFactory;
