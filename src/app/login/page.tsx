'use client';

import { useState } from 'react';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Card,
  CircularProgress,
  FormGroup,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useLogin } from '@/graphql/hooks/login';
import { Controller, useForm } from 'react-hook-form';
import Form from '@/components/form/Form';
import { loginInputSchema, LoginInputType } from './validate';
import { zodResolver } from '@hookform/resolvers/zod';
import Iconify from '@/components/icon/Iconify';
import { useRouter } from 'next/navigation';
import { useSnack } from '@/context/snackContext/SnackProvider';

const LoginPage = () => {
  const account = 'admin@admin.com';
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const methods = useForm<LoginInputType>({
    resolver: zodResolver(loginInputSchema),
    defaultValues: {
      id: account,
      password: account,
    },
  });

  const { control, getValues, handleSubmit } = methods;

  const setSnack = useSnack();
  const [login, { loading }] = useLogin();
  const onSubmit = async (variables: LoginInputType) => {
    login({
      variables: {
        loginInput: variables,
      },
      onCompleted: () => {
        setSnack({ message: `${getValues('id')}님 환영합니다.`, variant: 'success' });
        router.push('/dashboard');
      },
      onError: (e) => {
        const msg = e.message;
        const name = e.name;
        if (!msg && !name) return;
        setSnack({ title: name ?? '오류', message: e.message, variant: 'error' });
      },
    });
  };

  return (
    <Stack
      sx={{
        py: 20,
        height: '100%',
        px: {
          md: 20,
          xs: 10,
        },
      }}
    >
      <Card
        sx={{
          border: 'none',
          bgcolor: 'white',
          alignSelf: 'center',
          width: '100%',
          p: 4,
          maxWidth: 480,
        }}
      >
        <Alert severity="info">
          <AlertTitle>테스트 계정</AlertTitle>
          <Typography variant="overline">{`ID : ${account} / PW : ${account}`}</Typography>
        </Alert>

        <Typography sx={{ my: 2 }} variant="h5">
          로그인
        </Typography>

        <Form methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 1 }}>
            <FormGroup sx={{ gap: 4 }}>
              <Controller
                name="id"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    slotProps={{
                      inputLabel: {
                        shrink: true,
                      },
                    }}
                    label="아이디"
                    error={!!error}
                    helperText={error?.message ?? ''}
                    placeholder="아이디(이메일)"
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="비밀번호"
                    error={!!error}
                    helperText={error?.message ?? ''}
                    type={showPassword ? 'text' : 'password'}
                    slotProps={{
                      inputLabel: {
                        shrink: true,
                      },
                      input: {
                        endAdornment: (
                          <InputAdornment
                            onClick={() => setShowPassword((prev) => !prev)}
                            sx={{ cursor: 'pointer' }}
                            position="end"
                          >
                            {showPassword ? (
                              <Iconify icon="mdi:eye-lock" />
                            ) : (
                              <Iconify icon="mdi:eye-lock-open" />
                            )}
                          </InputAdornment>
                        ),
                      },
                    }}
                    placeholder="비밀번호(6자리 이상)"
                  />
                )}
              />
            </FormGroup>
            <Button
              endIcon={loading ? <CircularProgress color="inherit" size={20} /> : <></>}
              type="submit"
              sx={{ mt: 2 }}
              variant="contained"
            >
              로그인
            </Button>
          </Box>
        </Form>
      </Card>
    </Stack>
  );
};
export default LoginPage;