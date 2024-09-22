'use client';

import { useEffect } from 'react';
import { useReactiveVar } from '@apollo/client';
import ProductCategoryGrid from './ProductCategoryGrid';
import {
  productCategoryCount,
  productCategoryKeyword,
  productCategoryTarget,
} from '@/store/backdata';
import { useProductCategories } from '@/graphql/hooks/productCategory/productCategories';

const ProductCategory = () => {
  const target = useReactiveVar(productCategoryTarget);
  const keyword = useReactiveVar(productCategoryKeyword);

  const handleSetCount = (count: number) => {
    productCategoryCount(count);
  };

  const { data, loading } = useProductCategories();
  const rows = data?.productCategories.data ?? [];
  const filteredRow = rows.filter((row) => {
    const value = row[target as keyof typeof row];
    return !!value?.toLowerCase().includes(keyword.toLowerCase());
  });

  useEffect(() => {
    if (filteredRow.length) {
      handleSetCount(filteredRow.length);
    }
  }, [filteredRow.length]);

  return <ProductCategoryGrid rows={filteredRow} loading={loading} />;
};

export default ProductCategory;
