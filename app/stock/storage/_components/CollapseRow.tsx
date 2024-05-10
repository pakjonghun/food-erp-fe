import { FC, useState } from 'react';
import {
  TableRow,
  TableCell,
  Collapse,
  Box,
  alpha,
  FormControl,
  InputAdornment,
  TextField,
} from '@mui/material';
import { StockStorageHeaderList } from '../constants';
import { StockStorageOutput } from '@/http/graphql/codegen/graphql';
import SubTableProductStock from './SubTableProductStock';
import { Search } from '@mui/icons-material';
import useTextDebounce from '@/hooks/useTextDebounce';

interface Props {
  open: boolean;
  storageStock: StockStorageOutput;
  onClickOption: (option: any | null, storage: StockStorageOutput) => void;
  setProductName: (productName: string) => void;
}

const CollapseRow: FC<Props> = ({
  open,
  storageStock,
  onClickOption,
  setProductName,
}) => {
  const [keyword, setKeyword] = useState('');
  const delayedKeyword = useTextDebounce(keyword);

  return (
    <TableRow>
      <TableCell
        sx={{
          py: 0,
          bgcolor: (theme) => alpha(theme.palette.grey[100], 0.5),
        }}
        colSpan={StockStorageHeaderList.length}
      >
        <Collapse in={open}>
          <Box sx={{ mt: 4, mb: 8, width: '90%', ml: 'auto' }}>
            <FormControl>
              <TextField
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: 300, my: 2 }}
                label="검색할 제품 이름을 입력하세요."
                size="small"
              />
            </FormControl>
            <SubTableProductStock
              setProductName={setProductName}
              onClickOption={onClickOption}
              storage={storageStock}
              keyword={delayedKeyword}
            />
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default CollapseRow;
