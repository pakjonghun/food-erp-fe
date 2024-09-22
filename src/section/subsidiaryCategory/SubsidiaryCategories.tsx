'use client';

import { useEffect } from 'react';
import { useReactiveVar } from '@apollo/client';
import SubsidiaryCategoryGrid from './SubsidiaryCategoryGrid';
import {
  subsidiaryCategoryCount,
  subsidiaryCategoryKeyword,
  subsidiaryCategoryTarget,
} from '@/store/backdata';
import { useSubsidiaryCategories } from '@/graphql/hooks/subsidiaryCategory/subsidiaryCategories';

const SubsidiaryCategory = () => {
  const target = useReactiveVar(subsidiaryCategoryTarget);
  const keyword = useReactiveVar(subsidiaryCategoryKeyword);

  const handleSetCount = (count: number) => {
    subsidiaryCategoryCount(count);
  };

  const { data, loading } = useSubsidiaryCategories();
  const rows = data?.subsidiaryCategories.data ?? [];
  const filteredRow = rows.filter((row) => {
    const value = row[target as keyof typeof row];
    return !!value?.toLowerCase().includes(keyword.toLowerCase());
  });

  useEffect(() => {
    if (filteredRow.length != null) {
      handleSetCount(filteredRow.length);
    }
  }, [filteredRow.length]);

  return <SubsidiaryCategoryGrid rows={filteredRow} loading={loading} />;
};

export default SubsidiaryCategory;
