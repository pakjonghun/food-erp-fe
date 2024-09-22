'use client';

import { useEffect } from 'react';
import { useReactiveVar } from '@apollo/client';
import ProductGrid from './SubsidiaryGrid';
import { subsidiaryCount, subsidiaryKeyword, subsidiaryTarget } from '@/store/backdata';
import { useSubsidiaries } from '@/graphql/hooks/subsidiary/subsidiaries';

const Subsidiary = () => {
  const target = useReactiveVar(subsidiaryTarget);
  const keyword = useReactiveVar(subsidiaryKeyword);

  const handleSetCount = (count: number) => {
    subsidiaryCount(count);
  };

  const { data, loading } = useSubsidiaries();
  const rows = data?.subsidiaries.data ?? [];
  const filteredRow = rows.filter((row) => {
    const value = row[target as keyof typeof row];
    if (typeof value == 'string') {
      return value.toLowerCase().includes(keyword.toLowerCase());
    }

    if (typeof value == 'number') {
      return value.toString().includes(keyword);
    }

    if (value != null && typeof value == 'object') {
      const realValue = value?.name;
      return realValue?.toLowerCase().includes(keyword.toLowerCase());
    }

    if (keyword == '') {
      return true;
    }

    return false;
  });

  useEffect(() => {
    if (filteredRow.length != null) {
      handleSetCount(filteredRow.length);
    }
  }, [filteredRow.length]);

  return <ProductGrid rows={filteredRow} loading={loading} />;
};

export default Subsidiary;
