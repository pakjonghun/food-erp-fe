'use client';

import TagFacesIcon from '@mui/icons-material/TagFaces';
import CommonHeader from '@/components/header/CommonHeader';
import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useLogin } from '@/graphql/hooks/login';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
  const { handleSubmit } = useForm();

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
          <Box
            onSubmit={handleSubmit(onSubmit)}
            component="form"
            sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
          >
            <FormControl>
              <FormLabel>아이디</FormLabel>
              <TextField placeholder="아이디" />
            </FormControl>
            <FormControl>
              <FormLabel>비밀번호</FormLabel>
              <TextField placeholder="비밀번호" type="password" />
            </FormControl>
            <Button type="submit" sx={{ mt: 2 }} variant="contained">
              로그인
            </Button>
          </Box>
        </Card>
      </Stack>
    </CommonHeader>
  );
};
export default LoginPage;
