'use client';

import FormStack from '@/components/form/FormStack';
import { useSnack } from '@/context/snackContext/SnackProvider';
import { useCreateSubsidiaryCategory } from '@/graphql/hooks/subsidiaryCategory/create';
import { IdNameForm, idNameSchema } from '@/validations/idName';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import NewLayout from '@/layout/new/New';

const NewSubsidiaryCategory = () => {
  const router = useRouter();

  const methods = useForm<IdNameForm>({
    resolver: zodResolver(idNameSchema),
    defaultValues: { id: '', name: '' },
  });

  const snack = useSnack();
  const [createCategory, { loading: creating }] = useCreateSubsidiaryCategory();

  const handleClose = () => {
    router.back();
  };

  const onSubmit = (values: IdNameForm) => {
    createCategory({
      variables: {
        createSubsidiaryCategoryInput: values,
      },
      onCompleted: () => {
        snack({ message: '카테고리 등록이 완료되었습니다.', variant: 'success' });
        router.push('/back-data/subsidiary/category');
      },
      onError: (err) => {
        const errorMessage = err.message;
        snack({ message: errorMessage ?? '카테고리 등록이 실패하였습니다.', variant: 'error' });
      },
    });
  };
  return (
    <NewLayout
      methods={methods}
      subHeader="새로운 부자재 카테고리 정보를 입력합니다."
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
                  label="카테고리 코드"
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
                  label="카테고리 이름"
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
            카테고리 등록
          </Button>
        </>
      }
    />
  );
};

export default NewSubsidiaryCategory;
