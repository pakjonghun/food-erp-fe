import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { GridColDef, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { FC, ReactNode } from 'react';
import Iconify from '../icon/Iconify';

interface Props {
  title: ReactNode;
  actionSection: ReactNode;
  keyword: string;
  target: string;
  targetList: GridColDef[];
  searchCount: number;
  selectedSize: number;
  deleting: boolean;
  onChangeKeyword: (value: string) => void;
  onChangeTarget: (value: string) => void;
  onClickDelete: () => void;
}

const BaseToolbar: FC<Props> = ({
  deleting,
  title,
  actionSection,
  keyword,
  target,
  targetList,
  searchCount,
  selectedSize,
  onChangeKeyword,
  onChangeTarget,
  onClickDelete,
}) => {
  return (
    <Stack sx={{ p: 3 }} direction="column" gap={2}>
      <Stack
        justifyContent="space-between"
        gap={1}
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
        }}
      >
        <Typography sx={{ mb: 2 }}>{title}</Typography>
        <Stack
          alignItems="center"
          gap={1}
          sx={{
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
          }}
        >
          {actionSection}
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="flex-start" gap={1}>
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
            sx={{ width: 100 }}
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
      {searchCount > 0 && <Typography variant="caption">{`검색 결과 ${searchCount}건`}</Typography>}
      {selectedSize > 0 && (
        <Button
          disabled={deleting}
          onClick={onClickDelete}
          sx={{ mr: 'auto' }}
          endIcon={
            deleting ? <CircularProgress size={18} /> : <Iconify icon="ph:trash-fill" width={20} />
          }
        >{`${selectedSize}개 선택 삭제`}</Button>
      )}
    </Stack>
  );
};

export default BaseToolbar;
