'use client';

import { uploadExcelFile } from '@/actions/upload';
import FileUploadInput from '@/components/input/FileUploadInput';
import { useSnack } from '@/context/snackContext/SnackProvider';
import { client } from '@/graphql/client/apolloClient';
import { AxiosError } from 'axios';
import { useRef } from 'react';

const ExcelUpload = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const setSnack = useSnack();

  const handleChangeFile = async (inputFile?: File) => {
    if (!inputFile) {
      return;
    }
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
      }, 1000);
    }

    if (inputRef.current?.value) {
      inputRef.current.value = '';
    }
  };

  return (
    <FileUploadInput ref={inputRef} handleChangeFile={handleChangeFile} title="엑셀파일 업로드" />
  );
};

export default ExcelUpload;
