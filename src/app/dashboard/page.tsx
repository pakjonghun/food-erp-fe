'use client';

import { ClientName } from '@/actions/type';
import { downloadParsedExcelFile } from '@/actions/upload';
import Iconify from '@/components/icon/Iconify';
import FileUploadInput from '@/components/input/FileUploadInput';
import { useSnack } from '@/context/snackContext/SnackProvider';
import ProductSection from '@/section/product/Product';
import { Box, Card, Typography } from '@mui/material';
import { AxiosError } from 'axios';

const DashboardPage = () => {
  const setSnack = useSnack();

  const handleChangeFile = async (clientName: ClientName, inputFile?: File) => {
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
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2, m: 3 }}>
      <Card sx={{ p: 2 }} variant="elevation" elevation={2}>
        <Typography sx={{ mb: 1 }}>사방넷 엑셀파일 편집</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}>
          <FileUploadInput
            icon={<Iconify icon="ri:file-edit-fill" width={18} />}
            handleChangeFile={(file) => handleChangeFile('ume', file)}
            title="우메종"
          />
          <FileUploadInput
            icon={<Iconify icon="ri:file-edit-fill" width={18} />}
            handleChangeFile={(file) => handleChangeFile('ho', file)}
            title="호제"
          />
        </Box>
      </Card>
      <Card sx={{ height: 3, flexGrow: 1 }} variant="elevation" elevation={2}>
        <ProductSection />
      </Card>
    </Box>
  );
};

export default DashboardPage;
