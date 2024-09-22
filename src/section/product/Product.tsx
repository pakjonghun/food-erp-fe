'use client';

import { useReactiveVar } from '@apollo/client';
import ProductGrid from './ProductGrid';
import { productCount, productKeyword, productTarget } from '@/store/backdata';
import { useProducts } from '@/graphql/hooks/product/products';
import { useEffect } from 'react';

const Product = () => {
  const target = useReactiveVar(productTarget);
  const keyword = useReactiveVar(productKeyword);

  const handleSetCount = (count: number) => {
    productCount(count);
  };

  const { data, loading } = useProducts();
  const rows = data?.products.data ?? [];
  const filteredRow = rows.filter((row) => {
    const value = row[target as keyof typeof row];
    if (typeof value == 'string') {
      return value.toLowerCase().includes(keyword.toLowerCase());
    }

    if (typeof value == 'number') {
      console.log('v k', value, keyword, value.toString().includes(keyword));
      return value.toString().includes(keyword);
    }

    if (keyword == '') {
      return true;
    }

    return false;
  });

  console.log('filteredRow : ', filteredRow.length);

  useEffect(() => {
    if (filteredRow.length) {
      handleSetCount(filteredRow.length);
    }
  }, [filteredRow.length]);

  return <ProductGrid rows={filteredRow} loading={loading} />;
};

export default Product;
