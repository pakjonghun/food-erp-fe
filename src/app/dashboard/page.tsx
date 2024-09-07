import ProductSection from '@/section/product/Product';
import { Box, Card } from '@mui/material';

const DashboardPage = () => {
  return (
    <Box sx={{ flex: '1 1 auto' }}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          p: 4,
          bgcolor: 'pink',
          border: '1px solid grey',
          borderRadius: 10,
        }}
      >
        <ProductSection />
      </Card>
    </Box>
  );
};

export default DashboardPage;
