import { FC } from 'react';
import Iconify from '@/components/icon/Iconify';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { searchTargetList } from './constants';

interface Props {
  targetKeyword: string;
  setTargetKeyword: (value: string) => void;
  keyword: string;
  setKeyword: (value: string) => void;
}

const Search: FC<Props> = ({ targetKeyword, setTargetKeyword, setKeyword, keyword }) => {
  return (
    <Stack direction="row" gap={1}>
      <TextField
        sx={{
          minWidth: {
            xs: 200,
            md: 300,
          },
        }}
        label="검색"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        placeholder="검색어를 입력하세요."
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <Iconify icon="material-symbols:search" />
              </InputAdornment>
            ),
          },
        }}
      />
      <FormControl>
        <InputLabel>대상</InputLabel>
        <Select
          label="대상"
          onChange={(e) => setTargetKeyword(e.target.value)}
          value={targetKeyword}
        >
          {searchTargetList.map((s) => {
            return (
              <MenuItem key={s.id} value={s.id}>
                {s.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default Search;
