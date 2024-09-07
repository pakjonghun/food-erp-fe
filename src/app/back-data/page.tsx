'use client';

import { Box } from '@mui/material';
import Action from './Action';
import Search from './Search';
import { useState } from 'react';
import { OrderNumber } from '@/type';

const BackDataPage = () => {
  const [keyword, setKeyword] = useState('');
  const [sort, setSort] = useState<null | string>(null);
  const [order, setOrder] = useState<null | OrderNumber>(null);
  const [targetKeyword, setTargetKeyword] = useState('name');

  return (
    <Box sx={{ flex: '1 1 auto' }}>
      <Action />
      <Search
        keyword={keyword}
        setKeyword={setKeyword}
        targetKeyword={targetKeyword}
        setTargetKeyword={setTargetKeyword}
      />
    </Box>
  );
};

export default BackDataPage;
