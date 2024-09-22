'use client';

import { useEffect } from 'react';
import { useReactiveVar } from '@apollo/client';
import WarehouseGrid from './WarehouseGrid';
import { warehouseCount, warehouseKeyword, warehouseTarget } from '@/store/backdata';
import { useWarehouses } from '@/graphql/hooks/warehouse/warehouses';

const Warehouse = () => {
  const target = useReactiveVar(warehouseTarget);
  const keyword = useReactiveVar(warehouseKeyword);

  const handleSetCount = (count: number) => {
    warehouseCount(count);
  };

  const { data, loading } = useWarehouses();
  const rows = data?.warehouses.data ?? [];
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

  return <WarehouseGrid rows={filteredRow} loading={loading} />;
};

export default Warehouse;
