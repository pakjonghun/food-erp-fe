'use client';

import { useEffect } from 'react';
import { useReactiveVar } from '@apollo/client';
import FactoryGrid from './FactoryGrid';
import { factoryCount, factoryKeyword, factoryTarget } from '@/store/backdata';
import { useFactories } from '@/graphql/hooks/factory/factories';

const Factory = () => {
  const target = useReactiveVar(factoryTarget);
  const keyword = useReactiveVar(factoryKeyword);

  const handleSetCount = (count: number) => {
    factoryCount(count);
  };

  const { data, loading } = useFactories();
  const rows = data?.factories.data ?? [];
  const filteredRow = rows.filter((row) => {
    if (keyword == '') {
      return true;
    }

    const value = row[target as keyof typeof row];
    return !!value?.toLowerCase().includes(keyword.toLowerCase());
  });

  useEffect(() => {
    if (filteredRow.length != null) {
      handleSetCount(filteredRow.length);
    }
  }, [filteredRow.length]);

  return <FactoryGrid rows={filteredRow} loading={loading} />;
};

export default Factory;
