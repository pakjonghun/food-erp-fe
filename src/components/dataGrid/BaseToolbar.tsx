import { FC, ReactNode } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { GridColDef, GridToolbarQuickFilter } from '@mui/x-data-grid';

interface Props {
  actionSection: ReactNode;
  keyword: string;
  target: string;
  targetList: GridColDef[];
  searchCount: number;
  onChangeKeyword: (value: string) => void;
  onChangeTarget: (value: string) => void;
}

const BaseToolbar: FC<Props> = ({
  actionSection,
  keyword,
  target,
  targetList,
  searchCount,
  onChangeKeyword,
  onChangeTarget,
}) => {
  return (
    <Stack sx={{ p: 3 }} direction="column" gap={2}>
      <Stack
        gap={1}
        sx={{
          justifyContent: 'space-between',
          flexDirection: {
            xs: 'column',
            lg: 'row',
          },
        }}
      >
        <Stack
          sx={{
            flex: 1,
            gap: {
              xs: 2,
              sm: 1,
            },
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
          }}
        >
          <GridToolbarQuickFilter
            value={keyword}
            onChange={(event) => onChangeKeyword(event.target.value)}
            sx={{
              width: {
                xs: '100%',
                sm: 'auto',
              },
              minWidth: 300,
              p: 0,
            }}
            variant="outlined"
            placeholder="검색 키워드 입력"
            label="검색"
          />
          <FormControl>
            <InputLabel size="small" shrink>
              검색대상
            </InputLabel>
            <Select
              value={target}
              onChange={(event) => onChangeTarget(event.target.value)}
              size="small"
              displayEmpty
              sx={{
                width: {
                  xs: '100%',
                  sm: 100,
                },
              }}
              label="검색대상"
            >
              {targetList.map((c) => (
                <MenuItem value={c.field} selected={target == c.field} key={c.field}>
                  {c.headerName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <Stack
          gap={1}
          sx={{
            justifyContent: {
              xs: 'flex-end',
            },
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
          }}
        >
          {actionSection}
        </Stack>
      </Stack>

      {searchCount > 0 && <Typography variant="caption">{`검색 결과 ${searchCount}건`}</Typography>}
    </Stack>
  );
};

export default BaseToolbar;
