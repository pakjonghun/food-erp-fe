'use client';

import Action from './Action';
import Search from './Search';
import { useState } from 'react';
import ProductGrid from './ProductGrid';

const ProductSection = () => {
  return (
    <>
      <Action />
      <ProductGrid />
    </>
  );
};

export default ProductSection;
