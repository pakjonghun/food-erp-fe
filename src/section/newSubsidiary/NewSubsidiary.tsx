'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Autocomplete, Button, Collapse, Stack, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { NewSubsidiaryForm, newSubsidiarySchema } from './validate';
import { useSubsidiaryCategories } from '@/graphql/hooks/subsidiaryCategory/subsidiaryCategories';
import FormStack from '@/components/form/FormStack';
import { useRouter } from 'next/navigation';
import { useCreateSubsidiary } from '@/graphql/hooks/subsidiary/create';
import { useSnack } from '@/context/snackContext/SnackProvider';
import { useState } from 'react';
import NewCategory from './newCategory/NewCategory';
import NewLayout from '@/layout/new/New';

const NewSubsidiary = () => {
  const snack = useSnack();
  const [showCreateCategory, setShowCreateCategory] = useState(false);
  const router = useRouter();
  const [create, { loading: creating }] = useCreateSubsidiary();
  const { data, loading } = useSubsidiaryCategories();

  const categories = data?.subsidiaryCategories.data ?? [];

  const methods = useForm<NewSubsidiaryForm>({
    resolver: zodResolver(newSubsidiarySchema),
    defaultValues: {
      id: '',
      name: '',
      categoryName: null,
    },
  });

  const handleClickCancel = () => {
    router.back();
  };

  const onSubmit = (value: NewSubsidiaryForm) => {
    create({
      variables: {
        createSubsidiaryInput: {
          id: value.id,
          name: value.name,
          categoryName: value.categoryName?.name,
          leadTime: value.leadTime,
          wonPrice: value.wonPrice,
        },
      },
      onCompleted: () => {
        snack({ message: '부자재 등록이 완료되었습니다.', variant: 'success' });
        router.push('/back-data/subsidiary');
      },
      onError: (err) => {
        const errMessage = err?.message;
        snack({ message: errMessage ?? '부자재 등록이 실패했습니다.', variant: 'error' });
      },
    });
  };

  const handleShowNewCategory = () => {
    setShowCreateCategory((prev) => !prev);
  };

  const handleCancelCategory = () => {
    setShowCreateCategory(false);
  };

  return (
    <NewLayout
      methods={methods}
      subHeader="새로운 부자재 정보를 입력합니다."
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
                    label="부자재 코드"
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
                    label="부자재 이름"
                  />
                );
              }}
            />
          </FormStack>
          <FormStack>
            <Controller
              control={methods.control}
              name="categoryName"
              render={({ field, fieldState }) => {
                const errorMessage = fieldState.error?.message ?? '';
                return (
                  <Stack sx={{ width: '100%' }} flexDirection="column" gap={1}>
                    <Stack flexDirection="row" gap={1}>
                      <Autocomplete
                        fullWidth
                        getOptionLabel={(o) => o.name}
                        isOptionEqualToValue={(a, b) => a.id == b.id}
                        onChange={(_, v) => field.onChange(v)}
                        value={field.value ?? null}
                        loading={loading}
                        loadingText="카테고리를 검색중입니다."
                        noOptionsText="검색된 카테고리가 없습니다."
                        options={categories}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            error={!!errorMessage}
                            helperText={errorMessage}
                            label="카테고리"
                          />
                        )}
                      />
                      <Button
                        size="small"
                        sx={{ textWrap: 'nowrap' }}
                        onClick={handleShowNewCategory}
                      >
                        새 카테고리
                      </Button>
                    </Stack>
                    <Collapse timeout="auto" in={showCreateCategory} unmountOnExit>
                      <NewCategory onSuccess={field.onChange} onClose={handleCancelCategory} />
                    </Collapse>
                  </Stack>
                );
              }}
            />

            <Controller
              control={methods.control}
              name="wonPrice"
              render={({ field, fieldState }) => {
                const errorMessage = fieldState.error?.message ?? '';
                return (
                  <TextField
                    {...field}
                    value={field.value ?? ''}
                    label="원가"
                    error={!!errorMessage}
                    helperText={errorMessage}
                    type="number"
                    fullWidth
                  />
                );
              }}
            />
          </FormStack>

          <Controller
            control={methods.control}
            name="leadTime"
            render={({ field, fieldState }) => {
              const errorMessage = fieldState.error?.message ?? '';
              return (
                <TextField
                  {...field}
                  value={field.value ?? ''}
                  label="리드타임"
                  error={!!errorMessage}
                  helperText={errorMessage}
                  type="number"
                  fullWidth
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
            부자재 등록
          </Button>
        </>
      }
    />
  );
};

export default NewSubsidiary;
