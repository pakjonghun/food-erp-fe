import ProductSection from '@/section/product/Product';
import { Box, Card } from '@mui/material';

const DashboardPage = () => {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Box>zz</Box>
      <Box sx={{ height: 3, flexGrow: 1 }}>
        <ProductSection />
      </Box>
    </Box>
  );
};

export default DashboardPage;
