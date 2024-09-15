import { Stack } from '@mui/material';
import Iconify from '../icon/Iconify';

const LoadingRow = () => {
  return (
    <Stack
      direction="row"
      sx={{ mt: 4, color: (theme) => theme.palette.grey[700] }}
      justifyContent="center"
    >
      <Iconify icon="svg-spinners:3-dots-bounce" />
    </Stack>
  );
};

export default LoadingRow;
