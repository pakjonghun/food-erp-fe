import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';

interface Props {
  nav?: ReactNode;
  header: ReactNode;
  children: ReactNode;
}

const BaseLayout: FC<Props> = ({ header, nav, children }) => {
  return (
    <Box component="main" sx={{ height: '100dvh' }}>
      {nav}
      <Box component="section" sx={{ display: 'flex', flexDirection: 'column', height: '100dvh' }}>
        {header}
        {children}
      </Box>
    </Box>
  );
};

export default BaseLayout;
