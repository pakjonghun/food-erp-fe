'use client';

import { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import CommonHeader from '@/components/header/CommonHeader';
import {
  Box,
  Button,
  Card,
  CircularProgress,
  FormControl,
  FormLabel,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useLogin } from '@/graphql/hooks/login';
import { useForm } from 'react-hook-form';
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
            py: 6,
            px: 4,
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

          <Form methods={methods} onSubmit={onSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}>
              <FormControl>
                <FormLabel>아이디</FormLabel>
                <TextField placeholder="아이디" />
              </FormControl>
              <FormControl>
                <FormLabel>비밀번호</FormLabel>
                <TextField
                  type={showPassword ? 'text' : 'password'}
                  slotProps={{
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
                  placeholder="비밀번호"
                />
              </FormControl>
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
    </CommonHeader>
  );
};
export default LoginPage;
