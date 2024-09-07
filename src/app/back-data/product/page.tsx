import { Box } from '@mui/material';
import ProductSection from '@/section/product/Product';

const BackDataPage = () => {
  return (
    <Box sx={{ p: 3, flex: '1 1 auto', display: 'flex', flexDirection: 'column', gap: 3 }}>
      <ProductSection />
    </Box>
  );
};

export default BackDataPage;
