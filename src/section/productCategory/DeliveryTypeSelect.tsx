'use client';

import { FC } from 'react';
import { DeliveryType } from '@/graphql/codegen/graphql';
import { FormControl, InputAdornment, MenuItem, Select } from '@mui/material';
import { GridRenderEditCellParams } from '@mui/x-data-grid';
import Iconify from '@/components/icon/Iconify';

const DeliveryTypeSelect: FC<GridRenderEditCellParams> = (props) => {
  const { value, api, id, field } = props;

  const handleChange = (newValue: string | null) => {
    api.setEditCellValue({ id, field, value: newValue });
  };

  return (
    <FormControl fullWidth>
      <Select
        displayEmpty
        value={value ?? ''}
        onChange={(event) => handleChange(event.target.value)}
        endAdornment={
          <InputAdornment position="end" sx={{ mr: 2 }}>
            <Iconify
              sx={{ cursor: 'pointer' }}
              onClick={() => handleChange(null)}
              icon="iconoir:cancel"
              width={18}
            />
          </InputAdornment>
        }
      >
        <MenuItem value={DeliveryType.Pay}>유료배송</MenuItem>
        <MenuItem value={DeliveryType.Free}>무료배송</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DeliveryTypeSelect;
