'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Autocomplete,
  Button,
  Card,
  CardHeader,
  Collapse,
  Divider,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { NewProductForm, newProductSchema } from './validate';
import Form from '@/components/form/Form';
import { useProductCategories } from '@/graphql/hooks/productCategory/productCategories';
import FormStack from '@/components/form/FormStack';
import { DeliveryType } from '@/graphql/codegen/graphql';
import Iconify from '@/components/icon/Iconify';
import { useRouter } from 'next/navigation';
import { useCreateProduct } from '@/graphql/hooks/product/createProduct';
import { useSnack } from '@/context/snackContext/SnackProvider';
import { useState } from 'react';
import { useCreateProductCategory } from '@/graphql/hooks/productCategory/createProductCategory';
import NewCategory from './newCategory/NewCategory';

const NewProduct = () => {
  const [showCreateCategory, setShowCreateCategory] = useState(false);
  const router = useRouter();
  const [createProduct, { loading: productCreating }] = useCreateProduct();
  const { data, loading } = useProductCategories();

  const categories = data?.productCategories.data ?? [];
  const snack = useSnack();

  const methods = useForm<NewProductForm>({
    resolver: zodResolver(newProductSchema),
    defaultValues: {
      id: '',
      name: '',
      barCode: '',
      categoryName: null,
      delivertType: null,
    },
  });

  const handleClickCancel = () => {
    router.back();
  };

  const onSubmit = (value: NewProductForm) => {
    createProduct({
      variables: {
        createProductInput: {
          id: value.id,
          name: value.name,
          barCode: value.barCode,
          categoryName: value.categoryName?.name,
          deliveryType: value.delivertType,
          leadTime: value.leadTime,
          salePrice: value.salePrice,
          wonPrice: value.wonPrice,
        },
      },
      onCompleted: () => {
        snack({ message: '제품등록이 완료되었습니다.', variant: 'success' });
        router.push('/back-data/product');
      },
      onError: (err) => {
        const errMessage = err?.message;
        snack({ message: errMessage ?? '제품등록이 실패했습니다.', variant: 'error' });
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
    <Form
      sx={{ maxWidth: 'lg', mx: 'auto', pb: 3 }}
      onSubmit={methods.handleSubmit(onSubmit)}
      methods={methods}
    >
      <Card variant="outlined" sx={{ boxShadow: 1 }}>
        <CardHeader subheader="새로운 제품 정보를 입력합니다." />
        <Divider
          sx={{
            mb: 3,
            boxShadow: 0,
            // borderColor: (theme) => theme.palette.grey[200],
          }}
        />
        <Stack sx={{ gap: 3, mx: 3, mb: 3 }}>
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
                    label="제품코드"
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
                    label="제품이름"
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
              name="barCode"
              render={({ field, fieldState }) => {
                const errorMessage = fieldState.error?.message ?? '';
                return (
                  <TextField
                    {...field}
                    fullWidth
                    label="바코드"
                    error={!!errorMessage}
                    helperText={errorMessage}
                  />
                );
              }}
            />
          </FormStack>
          <FormStack>
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
            <Controller
              control={methods.control}
              name="salePrice"
              render={({ field, fieldState }) => {
                const errorMessage = fieldState.error?.message ?? '';
                return (
                  <TextField
                    {...field}
                    value={field.value ?? ''}
                    label="판매가"
                    error={!!errorMessage}
                    helperText={errorMessage}
                    type="number"
                    fullWidth
                  />
                );
              }}
            />
          </FormStack>
          <FormStack>
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
            <Controller
              control={methods.control}
              name="delivertType"
              render={({ field, fieldState }) => {
                const errorMessage = fieldState.error?.message ?? '';
                return (
                  <FormControl fullWidth>
                    <InputLabel shrink>배송타입</InputLabel>
                    <Select
                      displayEmpty
                      label="배송타입"
                      error={!!errorMessage}
                      value={field.value ?? ''}
                      onChange={field.onChange}
                      endAdornment={
                        <InputAdornment position="end" sx={{ mr: 2 }}>
                          <Iconify
                            sx={{ cursor: 'pointer' }}
                            onClick={() => field.onChange(null)}
                            icon="iconoir:cancel"
                            width={18}
                          />
                        </InputAdornment>
                      }
                    >
                      <MenuItem value={DeliveryType.Pay}>유료배송</MenuItem>
                      <MenuItem value={DeliveryType.Free}>무료배송</MenuItem>
                    </Select>
                    <FormHelperText error={!!errorMessage}>{errorMessage}</FormHelperText>
                  </FormControl>
                );
              }}
            />
          </FormStack>
        </Stack>
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
        <Button disabled={productCreating} variant="outlined" onClick={handleClickCancel}>
          뒤로가기
        </Button>
        <Button
          disabled={productCreating || Object.keys(methods.formState.errors).length > 0}
          type="submit"
        >
          제품등록
        </Button>
      </FormStack>
    </Form>
  );
};

export default NewProduct;
