'use client';

import { uploadExcelFile } from '@/actions/upload';
import Iconify from '@/components/icon/Iconify';
import { useSnack } from '@/context/snackContext/SnackProvider';
import { client } from '@/graphql/client/apolloClient';
import { Box, Button } from '@mui/material';
import { AxiosError } from 'axios';
import { useRef, useState } from 'react';

const Action = () => {
  const inputFef = useRef<HTMLInputElement | null>(null);

  const setSnack = useSnack();

  const handleChangeFile = async (inputFile?: File) => {
    if (!inputFile) {
      return;
    }
    const err = (await uploadExcelFile('product', inputFile)) as AxiosError;
    if (err) {
      setSnack({ message: err.message ?? '', title: err.name ?? '', variant: 'error' });
    } else {
      setSnack({ message: '파일 업로드가 완료되었습니다.' });

      setTimeout(() => {
        client.cache.evict({
          id: 'ROOT_QUERY',
          fieldName: 'products',
        });
        client.cache.gc();
      }, 1000);
    }

    if (inputFef.current?.value) {
      inputFef.current.value = '';
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        htmlFor="upload"
        component="label"
        startIcon={<Iconify icon="ic:baseline-upload" width={18} style={{ marginBottom: '1px' }} />}
        sx={{ ml: 'auto', overflow: 'hidden' }}
      >
        엑셀파일 업로드
      </Button>
      <input
        ref={inputFef}
        onChange={(event) => handleChangeFile(event.target.files?.[0])}
        id="upload"
        type="file"
        hidden
        accept=".xlsx,.xls"
      />
    </Box>
  );
};

export default Action;
