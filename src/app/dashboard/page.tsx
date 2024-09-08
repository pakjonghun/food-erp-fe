import ProductSection from '@/section/product/Product';
import { Box, Card } from '@mui/material';

const DashboardPage = () => {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', py: 10 }}>
      <Card
        sx={{
          flexGrow: 1,
          height: 2,
        }}
      >
        <ProductSection />
      </Card>
    </Box>
  );
};

export default DashboardPage;
