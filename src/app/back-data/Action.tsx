'use client';

import Iconify from '@/components/icon/Iconify';
import { Box, Button, Input, InputAdornment, styled, TextField } from '@mui/material';
import { useState } from 'react';

const Action = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleChangeFile = () => {};

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
      <input id="upload" type="file" hidden accept=".xlsx,.xls" />
    </Box>
  );
};

export default Action;
