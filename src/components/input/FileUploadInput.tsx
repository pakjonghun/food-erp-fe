'use client';

import { FC, ReactNode, useState } from 'react';
import { Box, Button, CircularProgress, SxProps, Theme, useMediaQuery } from '@mui/material';
import Iconify from '../icon/Iconify';
import { useTheme } from '@emotion/react';

interface Props {
  title: string;
  handleChangeFile: (file?: File) => void;
  onlyExcel?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  sx?: SxProps;
}

const FileUploadInput: FC<Props> = ({
  title,
  handleChangeFile,
  icon,
  sx,
  onlyExcel = false,
  loading,
}) => {
  const [fileKey, setFileKey] = useState(Date.now());

  const handleUpload = async (file?: File) => {
    await handleChangeFile(file);
    setFileKey(Date.now());
  };

  const theme = useTheme() as Theme;
  const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', ...sx }}>
      <Button
        variant={isDownSm ? 'contained' : 'text'}
        size="small"
        disabled={loading}
        htmlFor={title}
        component="label"
        startIcon={
          loading ? (
            <CircularProgress size={18} />
          ) : (
            icon ?? <Iconify icon="ic:baseline-upload" width={18} style={{ marginBottom: '1px' }} />
          )
        }
        sx={{ overflow: 'hidden', width: '100%' }}
      >
        {title}
      </Button>
      <input
        key={fileKey}
        onChange={(event) => handleUpload(event.target.files?.[0])}
        id={title}
        type="file"
        hidden
        accept={onlyExcel ? '.xlsx,.xls' : '.xlsx,.xls,.csv'}
      />
    </Box>
  );
};

export default FileUploadInput;

FileUploadInput.displayName = 'fileUploadInput';
