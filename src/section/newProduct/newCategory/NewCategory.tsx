'use client';

import FormStack from '@/components/form/FormStack';
import { useSnack } from '@/context/snackContext/SnackProvider';
import { ProductCategories } from '@/graphql/codegen/graphql';
import { useCreateProductCategory } from '@/graphql/hooks/productCategory/createProductCategory';
import { IdNameForm, idNameSchema } from '@/validations/idName';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack, TextField } from '@mui/material';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

interface Props {
  onClose: () => void;
  onSuccess: (newItem: IdNameForm) => void;
}

const NewCategory: FC<Props> = ({ onClose, onSuccess }) => {
  const methods = useForm<IdNameForm>({
    resolver: zodResolver(idNameSchema),
    defaultValues: { id: '', name: '' },
    mode: 'onChange',
  });

  const snack = useSnack();
  const [createCategory, { loading: categoryCreating }] = useCreateProductCategory();
  const onSubmit = () => {
    const values = methods.getValues();
    createCategory({
      variables: {
        createProductCategoryInput: values,
      },
      onCompleted: () => {
        snack({ message: '카테고리 등록이 완료되었습니다.', variant: 'success' });
        onSuccess(values);
        onClose();
      },
      onError: (err) => {
        const errorMessage = err.message;
        snack({ message: errorMessage ?? '카테고리 등록이 실패하였습니다.', variant: 'error' });
      },
    });
  };
  return (
    <Stack flexDirection="row" gap={1} alignItems="flex-start">
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
                placeholder="카테고리 코드"
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
                placeholder="카테고리 이름"
              />
            );
          }}
        />
      </FormStack>
      <Button
        sx={{ height: 37.13 }}
        onClick={onClose}
        variant="outlined"
        disabled={categoryCreating}
        size="small"
      >
        취소
      </Button>
      <Button
        sx={{ height: 37.13 }}
        onClick={onSubmit}
        disabled={categoryCreating || Object.keys(methods.formState.errors).length > 0}
        size="small"
      >
        생성
      </Button>
    </Stack>
  );
};

export default NewCategory;
