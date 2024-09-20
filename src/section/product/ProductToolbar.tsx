import { Button, CircularProgress } from '@mui/material';
import { gridExpandedSortedRowIdsSelector, useGridApiContext } from '@mui/x-data-grid';
import Iconify from '@/components/icon/Iconify';
import ProductUpload from './ProductUpload';
import { productColumnList } from './constants';
import { useCallback, useEffect, useState } from 'react';
import { productCount, productKeyword, productTarget } from '@/store/backdata';
import { useReactiveVar } from '@apollo/client';
import useTextDebounce from '@/hooks/useTextDebounce';
import BaseToolbar from '@/components/dataGrid/BaseToolbar';
import { useRemoveManyProduct } from '@/graphql/hooks/product/removeMany';
import { client } from '@/graphql/client/apolloClient';
import { useSnack } from '@/context/snackContext/SnackProvider';

const getFilteredRow = ({ apiRef }: any) => gridExpandedSortedRowIdsSelector(apiRef);

const ProductToolbar = () => {
  const [keyword, setKeyword] = useState('');
  const delayText = useTextDebounce({ keyword });
  const handleChangeTarget = (target: string) => productTarget(target);
  const handleChangeProductKeyword = (target: string) => productKeyword(target);
  const searchCount = useReactiveVar(productCount);
  const target = useReactiveVar(productTarget);

  const [removeProductList, { loading }] = useRemoveManyProduct();
  const setSnack = useSnack();

  const handleChangeKeyword = useCallback((value: string) => {
    setKeyword(value);
  }, []);

  useEffect(() => {
    handleChangeProductKeyword(delayText);
  }, [delayText]);

  const apiRef = useGridApiContext();
  const selectedRows = apiRef.current.getSelectedRows();
  const selectedSize = selectedRows.size;
  const selectedIds = Array.from(selectedRows, (item) => item[0]) as string[];

  const handleExport = (options: any) => apiRef.current.exportDataAsCsv(options);
  const handleClickDelete = () => {
    removeProductList({
      variables: {
        idListInput: {
          idList: selectedIds,
        },
      },
      onCompleted: () => {
        setSnack({ message: '삭제가 완료되었습니다.', variant: 'success' });
        client.cache.evict({ fieldName: 'products', broadcast: true });
      },
      onError: (err) => {
        setSnack({ message: err?.message ?? '삭제가 실패하였습니다.', variant: 'error' });
      },
    });
  };
  return (
    <BaseToolbar
      deleting={loading}
      onClickDelete={handleClickDelete}
      selectedSize={selectedSize}
      searchCount={searchCount}
      targetList={productColumnList}
      target={target}
      onChangeTarget={handleChangeTarget}
      onChangeKeyword={handleChangeKeyword}
      keyword={keyword}
      title="제품"
      actionSection={
        <>
          {selectedSize > 0 && (
            <Button
              disabled={loading}
              onClick={handleClickDelete}
              sx={{ width: { xs: '100%', sm: 'auto' } }}
              endIcon={
                loading ? (
                  <CircularProgress size={18} />
                ) : (
                  <Iconify icon="ph:trash-fill" width={20} />
                )
              }
            >{`${selectedSize}개 선택 삭제`}</Button>
          )}
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
