'use client';

import { ClientName } from '@/actions/type';
import { downloadParsedExcelFile } from '@/actions/upload';
import Iconify from '@/components/icon/Iconify';
import FileUploadInput from '@/components/input/FileUploadInput';
import { useSnack } from '@/context/snackContext/SnackProvider';
import ProductSection from '@/section/product/Product';
import { Box, Typography } from '@mui/material';
import { AxiosError } from 'axios';

const DashboardPage = () => {
  const setSnack = useSnack();

  const handleChangeFile = async (clientName: ClientName, inputFile?: File) => {
    console.log('working,clientName', clientName);
    if (!inputFile) {
      return;
    }
    const err = (await downloadParsedExcelFile(clientName, inputFile)) as AxiosError<{
      message: string;
    }>;
    if (err) {
      const message = err.response?.data?.message || err.message;
      setSnack({ message: message ?? '', title: err.name ?? '', variant: 'error' });
    } else {
      setSnack({ message: '엑셀파일 수정이 완료되었습니다.' });
    }
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2 }}>
        <Typography sx={{ mb: 1 }}>사방넷 파일 제품명 편집</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}>
          <FileUploadInput
            icon={<Iconify icon="ri:file-edit-fill" width={18} />}
            handleChangeFile={(file) => handleChangeFile('ume', file)}
            title="우메종 엑셀파일 상품명 변경"
          />
          <FileUploadInput
            icon={<Iconify icon="ri:file-edit-fill" width={18} />}
            handleChangeFile={(file) => handleChangeFile('ho', file)}
            title="호제 엑셀파일 상품명 변경"
          />
        </Box>
      </Box>
      <Box sx={{ height: 3, flexGrow: 1 }}>
        <ProductSection />
      </Box>
    </Box>
  );
};

export default DashboardPage;
