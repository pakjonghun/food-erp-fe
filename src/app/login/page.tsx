'use client';

import { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import CommonHeader from '@/components/header/CommonHeader';
import {
  Alert,
  Box,
  Button,
  Card,
  CircularProgress,
  FormControl,
  FormGroup,
  FormLabel,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useLogin } from '@/graphql/hooks/login';
import { Controller, useForm } from 'react-hook-form';
import Form from '@/components/form/Form';
import { loginInputSchema, LoginInputType } from './validate';
import { zodResolver } from '@hookform/resolvers/zod';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const methods = useForm<LoginInputType>({
    resolver: zodResolver(loginInputSchema),
    defaultValues: {
      id: '',
      password: '',
    },
  });

  const { control, handleSubmit } = methods;

  const [login, { loading }] = useLogin({
    id: 'email1',
    password: 'email1',
  });
  const onSubmit = () => {
    login();
  };

  return (
    <CommonHeader>
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
          variant="outlined"
          sx={{
            bgcolor: 'white',
            alignSelf: 'center',
            width: '100%',
            p: 4,
            maxWidth: 480,
          }}
        >
          <Stack flexDirection="row" gap={1} alignItems="center">
            <TagFacesIcon />
            <Typography variant="body2">반갑습니다.</Typography>
          </Stack>
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
                              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </InputAdornment>
                          ),
                        },
                      }}
                      placeholder="비밀번호(6자리 이상)"
                    />
                  )}
                />
              </FormGroup>
              <Stack flexDirection="row" gap={1} sx={{ mt: -1 }}>
                {/* <Alert sx={{ py: 0.2 }} severity="info">
                  아이디 : 이메일 형식, 비밀번호 : 8자리 이상
                </Alert> */}
                <Button sx={{ ml: 'auto' }} variant="text">
                  비밀번호 찾기
                </Button>
              </Stack>
              <Button
                endIcon={loading ? <CircularProgress color="inherit" size={20} /> : <></>}
                type="submit"
                sx={{ mt: 1 }}
                variant="contained"
              >
                로그인
              </Button>
            </Box>
          </Form>
        </Card>
      </Stack>
    </CommonHeader>
  );
};
export default LoginPage;
