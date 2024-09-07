'use client';

import { navList } from '@/components/navigation/constants';
import { Stack, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';

const MainTitle = () => {
  const path = usePathname();

  const getMainTitle = () => {
    const firstPath = path.split('/').filter((i) => !!i)[0];
    return navList.find((n) => n.path.includes(firstPath));
  };

  const targetNav = getMainTitle();

  return (
    <Stack direction="row" gap={1} alignItems="center">
      {targetNav?.icon ?? ''}
      <Typography variant="h6">{targetNav?.label ?? ''}</Typography>
    </Stack>
  );
};

export default MainTitle;
