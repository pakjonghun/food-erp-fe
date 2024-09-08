'use client';

import { forwardRef, ReactNode, useState } from 'react';
import { Box, Button } from '@mui/material';
import Iconify from '../icon/Iconify';

interface Props {
  title: string;
  handleChangeFile: (file?: File) => void;
  icon?: ReactNode;
}

const FileUploadInput = forwardRef<HTMLInputElement, Props>(({ title, handleChangeFile, icon }) => {
  const [fileKey, setFileKey] = useState(Date.now());

  const handleUpload = async (file?: File) => {
    await handleChangeFile(file);
    setFileKey(Date.now());
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        htmlFor={title}
        component="label"
        startIcon={
          icon ?? <Iconify icon="ic:baseline-upload" width={18} style={{ marginBottom: '1px' }} />
        }
        sx={{ ml: 'auto', overflow: 'hidden' }}
      >
        {title}
      </Button>
      <input
        key={fileKey}
        onChange={(event) => handleUpload(event.target.files?.[0])}
        id={title}
        type="file"
        hidden
        accept=".xlsx,.xls,.csv"
      />
    </Box>
  );
});

export default FileUploadInput;

FileUploadInput.displayName = 'fileUploadInput';
