'use client';

import { Box, Button, Stack, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { LoginForm, loginSchema } from './validate';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLogin } from '@/api/rest/hooks/auth/useAuth';
import { useGetMyInfo } from '@/api/graphql/hooks/users/useGetMyInfo';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/components/ui/loading/PageLoading';
import { snackMessage } from '@/store/snackMessage';
import { client } from '@/api/graphql/client';
import CommonLoading from '@/components/ui/loading/CommonLoading';

const LoginPage = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      id: '',
      password: '',
    },
    mode: 'onChange',
  });

  const router = useRouter();
  const { mutate: login, isPending } = useLogin();
  const { data: myInfo, loading } = useGetMyInfo();
  useEffect(() => {
    if (!loading && myInfo) {
      router.replace('/');
    }
  }, [loading, myInfo, router]);

  const submit = (values: LoginForm) => {
    login(values, {
      onSuccess: async () => {
        snackMessage({ message: '환영합니다.', severity: 'success' });
        await client.refetchQueries({ include: 'active' });
      },
      onError: (error) => {
        const message = error.response?.data.message;
        snackMessage({ message: message ?? '로그인이 실패했습니다.', severity: 'error' });
      },
    });
  };

  if (loading) return <Loading />;

  if (!loading && myInfo) return <></>;

  return (
    <Box>
      <form onSubmit={handleSubmit(submit)}>
        <Stack sx={{ mx: 'auto', pt: '20%', px: 3 }} maxWidth="sm" direction="column" gap={2}>
          <Controller
            name="id"
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  required
                  placeholder="이아디"
                  error={!!errors.id}
                  helperText={errors.id?.message ?? ''}
                />
              );
            }}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  type="password"
                  required
                  placeholder="비밀번호"
                  error={!!errors.password}
                  helperText={errors.password?.message ?? ''}
                />
              );
            }}
          />

          <Button
            startIcon={isPending ? <CommonLoading /> : ''}
            size="large"
            sx={{
              py: {
                xs: 1,
                md: 1.3,
              },
            }}
            variant="contained"
            type="submit"
          >
            로그인
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginPage;
