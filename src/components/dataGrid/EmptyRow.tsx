import { Stack } from '@mui/material';

const EmptyRow = () => {
  return (
    <Stack
      direction="row"
      sx={{ mt: 4, color: (theme) => theme.palette.grey[700] }}
      justifyContent="center"
    >
      검색된 데이터가 없습니다.
    </Stack>
  );
};

export default EmptyRow;
