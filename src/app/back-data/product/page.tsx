// 'use client';

import ProductSection from '@/section/product/Product';
import { redirect } from 'next/navigation';

const BackDataPage = () => {
  // return redirect('/back-data/product');
  return <ProductSection />;
};

export default BackDataPage;
