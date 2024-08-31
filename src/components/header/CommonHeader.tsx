import { AppBar, Box, Button, styled, Toolbar, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const CommonHeader: FC<Props> = ({ children }) => {
  return (
    <Box sx={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}>
      <CustomAppBar>
        <Toolbar
          variant="dense"
          disableGutters
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            p: '8px 12px',
          }}
        >
          <Button startIcon={<ArrowBackIcon />}>뒤로가기</Button>
          <Typography>제목</Typography>
        </Toolbar>
      </CustomAppBar>
      <Box sx={{ flex: '1 1', overflow: 'auto' }}>{children}</Box>
    </Box>
  );
};

export default CommonHeader;

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderBottom: '1px solid',
  borderColor: theme.palette.divider,
  background: theme.palette.background.paper,
  zIndex: theme.zIndex.drawer + 1,
  flex: '0 0  auto',
  boxShadow: theme.shadows[0],
}));
