import { Box } from '@mui/material';
import ProductSection from '@/section/product/Product';

const BackDataPage = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: 3,
        pb: 2,
      }}
    >
      <ProductSection />
    </Box>
  );
};

export default BackDataPage;
