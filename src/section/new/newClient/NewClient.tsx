'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Autocomplete,
  Button,
  Collapse,
  FormControlLabel,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { NewClientForm, newClientSchema } from './validate';
import { useClientTypes } from '@/graphql/hooks/clientType/clientTypes';
import FormStack from '@/components/form/FormStack';
import { useRouter } from 'next/navigation';
import { useCreateClient } from '@/graphql/hooks/client/create';
import { useSnack } from '@/context/snackContext/SnackProvider';
import { useState } from 'react';
import NewCategory from './newClientType/NewClientType';
import NewLayout from '@/layout/new/New';

const NewClient = () => {
  const snack = useSnack();
  const [showCreateCategory, setShowCreateCategory] = useState(false);
  const router = useRouter();
  const [create, { loading: creating }] = useCreateClient();
  const { data, loading } = useClientTypes();

  const categories = data?.clientTypes.data ?? [];

  const methods = useForm<NewClientForm>({
    resolver: zodResolver(newClientSchema),
    defaultValues: {
      id: '',
      name: '',
      clientTypeName: null,
    },
  });

  const handleClickCancel = () => {
    router.back();
  };

  const onSubmit = (value: NewClientForm) => {
    create({
      variables: {
        createClientInput: {
          id: value.id,
          name: value.name,
          clientTypeName: value.clientTypeName?.name,
          isSabangService: !!value.isSabangService,
          businessName: value.businessName,
          businessNumber: value.businessNumber,
          feeRate: value.feeRate,
          inActive: !!value.inActive,
          manager: value.manager,
          managerTel: value.managerTel,
          payDate: value.payDate,
        },
      },
      onCompleted: () => {
        snack({ message: '거래처 등록이 완료되었습니다.', variant: 'success' });
        router.push('/back-data/client');
      },
      onError: (err) => {
        const errMessage = err?.message;
        snack({ message: errMessage ?? '거래처 등록이 실패했습니다.', variant: 'error' });
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
      subHeader="새로운 거래처 정보를 입력합니다."
      onSubmit={onSubmit}
      inputSection={
        <>
          <Controller
            control={methods.control}
            name="isSabangService"
            render={({ field }) => {
              return (
                <FormControlLabel
                  sx={{ ml: 'auto' }}
                  label={
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      {field.value ? '사방넷 지원' : '사방넷 미지원'}
                    </Typography>
                  }
                  control={
                    <Switch
                      size="small"
                      onChange={(_, checked) => field.onChange(checked)}
                      value={field.value}
                    />
                  }
                />
              );
            }}
          />

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
                    label="거래처 코드"
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
                    label="거래처 이름"
                  />
                );
              }}
            />
          </FormStack>
          <FormStack>
            <Controller
              control={methods.control}
              name="feeRate"
              render={({ field, fieldState }) => {
                const errorMessage = fieldState.error?.message ?? '';
                return (
                  <TextField
                    {...field}
                    value={field.value ?? ''}
                    label="수수료"
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
              name="payDate"
              render={({ field, fieldState }) => {
                const errorMessage = fieldState.error?.message ?? '';
                return (
                  <TextField
                    {...field}
                    value={field.value ?? ''}
                    label="결제일"
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
              name="manager"
              render={({ field, fieldState }) => {
                const errorMessage = fieldState.error?.message ?? '';
                return (
                  <TextField
                    {...field}
                    fullWidth
                    error={!!errorMessage}
                    helperText={errorMessage}
                    label="관리자"
                  />
                );
              }}
            />
            <Controller
              control={methods.control}
              name="managerTel"
              render={({ field, fieldState }) => {
                const errorMessage = fieldState.error?.message ?? '';
                return (
                  <TextField
                    {...field}
                    fullWidth
                    error={!!errorMessage}
                    helperText={errorMessage}
                    label="연락처"
                  />
                );
              }}
            />
          </FormStack>
          <FormStack>
            <Controller
              control={methods.control}
              name="businessName"
              render={({ field, fieldState }) => {
                const errorMessage = fieldState.error?.message ?? '';
                return (
                  <TextField
                    {...field}
                    fullWidth
                    error={!!errorMessage}
                    helperText={errorMessage}
                    label="상호"
                  />
                );
              }}
            />
            <Controller
              control={methods.control}
              name="businessNumber"
              render={({ field, fieldState }) => {
                const errorMessage = fieldState.error?.message ?? '';
                return (
                  <TextField
                    {...field}
                    fullWidth
                    error={!!errorMessage}
                    helperText={errorMessage}
                    label="사업자 등록번호"
                  />
                );
              }}
            />
          </FormStack>

          <Controller
            control={methods.control}
            name="clientTypeName"
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
                      loadingText="거래처 타입을 검색중입니다."
                      noOptionsText="검색된 거래처 타입이 없습니다."
                      options={categories}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          error={!!errorMessage}
                          helperText={errorMessage}
                          label="거래처 타입"
                        />
                      )}
                    />
                    <Button
                      size="small"
                      sx={{ textWrap: 'nowrap', px: 3 }}
                      onClick={handleShowNewCategory}
                    >
                      새 거래처 타입
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
            name="inActive"
            render={({ field }) => {
              return (
                <FormControlLabel
                  sx={{ whiteSpace: 'nowrap', ml: 1 }}
                  label={
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      {field.value ? '거래중' : '거래종료'}
                    </Typography>
                  }
                  control={
                    <Switch
                      size="small"
                      onChange={(_, checked) => field.onChange(checked)}
                      value={field.value}
                    />
                  }
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
            거래처 등록
          </Button>
        </>
      }
    />
  );
};

export default NewClient;
