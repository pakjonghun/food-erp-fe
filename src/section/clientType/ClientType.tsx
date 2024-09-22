'use client';

import { useEffect } from 'react';
import { useReactiveVar } from '@apollo/client';
import ClientTypeGrid from './ClientTypeGrid';
import { clientTypeCount, clientTypeKeyword, clientTypeTarget } from '@/store/backdata';
import { useClientTypes } from '@/graphql/hooks/clientType/clientTypes';

const ClientType = () => {
  const target = useReactiveVar(clientTypeTarget);
  const keyword = useReactiveVar(clientTypeKeyword);

  const handleSetCount = (count: number) => {
    clientTypeCount(count);
  };

  const { data, loading } = useClientTypes();
  const rows = data?.clientTypes.data ?? [];
  const filteredRow = rows.filter((row) => {
    const value = row[target as keyof typeof row];
    return !!value?.toLowerCase().includes(keyword.toLowerCase());
  });

  useEffect(() => {
    if (filteredRow.length != null) {
      handleSetCount(filteredRow.length);
    }
  }, [filteredRow.length]);

  return <ClientTypeGrid rows={filteredRow} loading={loading} />;
};

export default ClientType;
