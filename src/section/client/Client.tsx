'use client';

import { useEffect } from 'react';
import { useReactiveVar } from '@apollo/client';
import ClientGrid from './ClientGrid';
import { clientCount, clientKeyword, clientTarget } from '@/store/backdata';
import { useClients } from '@/graphql/hooks/client/clients';

const Client = () => {
  const target = useReactiveVar(clientTarget);
  const keyword = useReactiveVar(clientKeyword);

  const handleSetCount = (count: number) => {
    clientCount(count);
  };

  const { data, loading } = useClients();
  const rows = data?.clients.data ?? [];
  const filteredRow = rows.filter((row) => {
    if (keyword == '') {
      return true;
    }

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

    return false;
  });

  useEffect(() => {
    if (filteredRow.length != null) {
      handleSetCount(filteredRow.length);
    }
  }, [filteredRow.length]);

  return <ClientGrid rows={filteredRow} loading={loading} />;
};

export default Client;
