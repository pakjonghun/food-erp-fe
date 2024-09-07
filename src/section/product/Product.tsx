'use client';

import { Box } from '@mui/material';
import Action from './Action';
import Search from './Search';
import { useState } from 'react';
import { OrderNumber } from '@/type';

const ProductSection = () => {
  const [keyword, setKeyword] = useState('');
  const [sort, setSort] = useState<null | string>(null);
  const [order, setOrder] = useState<null | OrderNumber>(null);
  const [targetKeyword, setTargetKeyword] = useState('name');

  return (
    <>
      <Action />
      <Search
        keyword={keyword}
        setKeyword={setKeyword}
        targetKeyword={targetKeyword}
        setTargetKeyword={setTargetKeyword}
      />
      <Box sx={{ width: '100%', height: 400 }}></Box>
    </>
  );
};

export default ProductSection;
