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

const ProductCategoryUpload: FC<Props> = ({ sx }) => {
  const snack = useSnack();
  const [loading, setLoading] = useState(false);

  const handleChangeFile = async (inputFile?: File) => {
    if (!inputFile) {
      return;
    }
    setLoading(true);
    const err = (await uploadExcelFile('product-category', inputFile)) as AxiosError<{
      message: string;
    }>;
    if (err) {
      const message = err.response?.data?.message || err.message;
      snack({ message: message ?? '', title: err.name ?? '', variant: 'error' });
    } else {
      setTimeout(() => {
        client.cache.evict({
          id: 'ROOT_QUERY',
          fieldName: 'productCategories',
        });
        client.cache.gc();
        setLoading(false);
        snack({ message: '파일 업로드가 완료되었습니다.' });
      }, 500);
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

export default ProductCategoryUpload;
