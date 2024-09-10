'use client';

import { FC, useState } from 'react';
import { uploadExcelFile } from '@/actions/upload';
import FileUploadInput from '@/components/input/FileUploadInput';
import { useSnack } from '@/context/snackContext/SnackProvider';
import { client } from '@/graphql/client/apolloClient';
import { SxProps } from '@mui/material';
import { AxiosError } from 'axios';

interface Props {
  sx?: SxProps;
}

const ExcelUpload: FC<Props> = ({ sx }) => {
  const setSnack = useSnack();
  const [loading, setLoading] = useState(false);

  const handleChangeFile = async (inputFile?: File) => {
    if (!inputFile) {
      return;
    }
    setLoading(true);
    const err = (await uploadExcelFile('product', inputFile)) as AxiosError<{ message: string }>;
    if (err) {
      const message = err.response?.data?.message || err.message;
      setSnack({ message: message ?? '', title: err.name ?? '', variant: 'error' });
    } else {
      setSnack({ message: '파일 업로드가 완료되었습니다.' });

      setTimeout(() => {
        client.cache.evict({
          id: 'ROOT_QUERY',
          fieldName: 'products',
        });
        client.cache.gc();
        setLoading(true);
      }, 1000);
    }
  };

  return (
    <FileUploadInput
      loading={loading}
      sx={sx}
      handleChangeFile={handleChangeFile}
      title="엑셀파일 업로드"
    />
  );
};

export default ExcelUpload;
