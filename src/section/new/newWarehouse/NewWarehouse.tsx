'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { NewWarehouseForm, newWarehouseSchema } from './validate';
import FormStack from '@/components/form/FormStack';
import { useRouter } from 'next/navigation';
import { useSnack } from '@/context/snackContext/SnackProvider';
import NewLayout from '@/layout/new/New';
import { useCreateWarehouse } from '@/graphql/hooks/warehouse/create';

const NewWarehouse = () => {
  const snack = useSnack();
  const router = useRouter();
  const [create, { loading: creating }] = useCreateWarehouse();

  const methods = useForm<NewWarehouseForm>({
    resolver: zodResolver(newWarehouseSchema),
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

  const onSubmit = (value: NewWarehouseForm) => {
    create({
      variables: {
        createWarehouseInput: {
          id: value.id,
          name: value.name,
          address: value.address,
          note: value.note,
          phoneNumber: value.phoneNumber,
        },
      },
      onCompleted: () => {
        snack({ message: '창고 등록이 완료되었습니다.', variant: 'success' });
        router.push('/back-data/warehouse');
      },
      onError: (err) => {
        const errMessage = err?.message;
        snack({ message: errMessage ?? '창고 등록이 실패했습니다.', variant: 'error' });
      },
    });
  };

  return (
    <NewLayout
      methods={methods}
      subHeader="새로운 창고 정보를 입력합니다."
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
                    label="창고 코드"
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
                    label="창고 이름"
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
                    label="창고 주소"
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
                    label="창고 연락처"
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
            창고 등록
          </Button>
        </>
      }
    />
  );
};

export default NewWarehouse;
