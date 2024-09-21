'use client';

import { FC } from 'react';
import { ProductCategories } from '@/graphql/codegen/graphql';
import { Autocomplete, TextField } from '@mui/material';
import { GridRenderEditCellParams } from '@mui/x-data-grid';

interface Props {
  loading: boolean;
  categories: any[];
  editColProps: GridRenderEditCellParams;
}

const CategoryAutoComplete: FC<Props> = ({ loading, categories, editColProps }) => {
  const { value, api, id, field } = editColProps;

  const handleChange = (newValue: ProductCategories) => {
    api.setEditCellValue({ id, field, value: newValue });
  };

  return (
    <Autocomplete
      fullWidth
      getOptionLabel={(o) => o.name}
      isOptionEqualToValue={(a, b) => a.id == b.id}
      onChange={(_, v) => handleChange(v)}
      value={typeof value == 'string' ? { id: 'initValue', name: value } : value ?? null}
      loading={loading}
      loadingText="카테고리를 검색중입니다."
      options={categories}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default CategoryAutoComplete;
