'use client';

import { Box, Button } from '@mui/material';
import Iconify from '../icon/Iconify';
import { forwardRef } from 'react';

interface Props {
  title: string;
  handleChangeFile: (file?: File) => void;
}

const FileUploadInput = forwardRef<HTMLInputElement, Props>(({ title, handleChangeFile }, ref) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        htmlFor="upload"
        component="label"
        startIcon={<Iconify icon="ic:baseline-upload" width={18} style={{ marginBottom: '1px' }} />}
        sx={{ ml: 'auto', overflow: 'hidden' }}
      >
        {title}
      </Button>
      <input
        ref={ref}
        onChange={(event) => handleChangeFile(event.target.files?.[0])}
        id="upload"
        type="file"
        hidden
        accept=".xlsx,.xls,.csv"
      />
    </Box>
  );
});

export default FileUploadInput;
