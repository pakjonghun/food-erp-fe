import { Button } from '@mui/material';
import { gridExpandedSortedRowIdsSelector, useGridApiContext } from '@mui/x-data-grid';
import Iconify from '@/components/icon/Iconify';
import ProductUpload from './ProductUpload';
import { productColumnList } from './constants';
import { useCallback, useEffect, useState } from 'react';
import { productCount, productKeyword, productTarget } from '@/store/backdata';
import { useReactiveVar } from '@apollo/client';
import useTextDebounce from '@/hooks/useTextDebounce';
import BaseToolbar from '@/components/dataGrid/BaseToolbar';

const getFilteredRow = ({ apiRef }: any) => gridExpandedSortedRowIdsSelector(apiRef);

const ProductToolbar = () => {
  const [keyword, setKeyword] = useState('');
  const delayText = useTextDebounce({ keyword });
  const handleChangeTarget = (target: string) => productTarget(target);
  const handleChangeProductKeyword = (target: string) => productKeyword(target);
  const searchCount = useReactiveVar(productCount);
  const target = useReactiveVar(productTarget);
  const handleChangeKeyword = useCallback((value: string) => {
    setKeyword(value);
  }, []);

  useEffect(() => {
    handleChangeProductKeyword(delayText);
  }, [delayText]);

  const apiRef = useGridApiContext();
  const handleExport = (options: any) => apiRef.current.exportDataAsCsv(options);
  return (
    <BaseToolbar
      searchCount={searchCount}
      targetList={productColumnList}
      target={target}
      onChangeTarget={handleChangeTarget}
      onChangeKeyword={handleChangeKeyword}
      keyword={keyword}
      title="제품"
      actionSection={
        <>
          <ProductUpload sx={{ width: { xs: '100%', sm: 'auto' } }} />
          <Button
            sx={{ width: { xs: '100%', sm: 'auto' } }}
            onClick={() => handleExport({ getRowsToExport: getFilteredRow })}
            startIcon={<Iconify icon="ic:baseline-download" width={18} />}
          >
            엑셀다운로드
          </Button>
        </>
      }
    />
  );
};

export default ProductToolbar;
