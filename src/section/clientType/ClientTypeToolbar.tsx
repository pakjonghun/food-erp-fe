import Iconify from '@/components/icon/Iconify';
import { Button, CircularProgress, Theme, useMediaQuery } from '@mui/material';
import { GridColDef, gridExpandedSortedRowIdsSelector, useGridApiContext } from '@mui/x-data-grid';
import SubsidiaryUpload from './ClientTypeUpload';
import { FC, useCallback, useEffect, useState } from 'react';
import { clientTypeCount, clientTypeKeyword, clientTypeTarget } from '@/store/backdata';
import { useReactiveVar } from '@apollo/client';
import useTextDebounce from '@/hooks/useTextDebounce';
import BaseToolbar from '@/components/dataGrid/BaseToolbar';
import { client } from '@/graphql/client/apolloClient';
import { useSnack } from '@/context/snackContext/SnackProvider';
import { useTheme } from '@emotion/react';
import { useRemoveManyClientType } from '@/graphql/hooks/clientType/removeMany';

const getFilteredRow = ({ apiRef }: any) => gridExpandedSortedRowIdsSelector(apiRef);

interface Props {
  column: GridColDef[];
}

const ClientTypeToolbar: FC<Props> = ({ column }) => {
  const [keyword, setKeyword] = useState('');
  const delayText = useTextDebounce({ keyword });
  const handleChangeTarget = (target: string) => clientTypeTarget(target);
  const handleChangeClientTypeKeyword = (target: string) => clientTypeKeyword(target);
  const searchCount = useReactiveVar(clientTypeCount);
  const target = useReactiveVar(clientTypeTarget);

  const [removeCategoryList, { loading }] = useRemoveManyClientType();
  const setSnack = useSnack();

  const handleChangeKeyword = useCallback((value: string) => {
    setKeyword(value);
  }, []);

  useEffect(() => {
    handleChangeClientTypeKeyword(delayText);
  }, [delayText]);

  const apiRef = useGridApiContext();
  const selectedRows = apiRef.current.getSelectedRows();
  const selectedSize = selectedRows.size;
  const selectedIds = Array.from(selectedRows, (item) => item[0]) as string[];
  const theme = useTheme() as Theme;
  const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

  const handleExport = (options: any) => apiRef.current.exportDataAsCsv(options);
  const handleClickDelete = () => {
    removeCategoryList({
      variables: {
        idListInput: {
          idList: selectedIds,
        },
      },
      onCompleted: () => {
        setSnack({ message: '삭제가 완료되었습니다.', variant: 'success' });
        client.cache.evict({ fieldName: 'clientTypes', broadcast: true });
        client.cache.gc();
      },
      onError: (err) => {
        setSnack({ message: err?.message ?? '삭제가 실패하였습니다.', variant: 'error' });
      },
    });
  };
  return (
    <BaseToolbar
      searchCount={searchCount}
      targetList={column}
      target={target}
      onChangeTarget={handleChangeTarget}
      onChangeKeyword={handleChangeKeyword}
      keyword={keyword}
      actionSection={
        <>
          {selectedSize > 0 && (
            <Button
              variant="text"
              size="small"
              disabled={loading}
              onClick={handleClickDelete}
              sx={{
                width: { xs: '100%', sm: 'auto', color: 'hotpink' },
              }}
              startIcon={
                loading ? (
                  <CircularProgress size={18} />
                ) : (
                  <Iconify icon="ph:trash-fill" width={20} />
                )
              }
            >{`${selectedSize}개 선택 삭제`}</Button>
          )}
          <SubsidiaryUpload sx={{ width: { xs: '100%', sm: 'auto' } }} />
          <Button
            variant={isDownSm ? 'contained' : 'text'}
            size="small"
            sx={{ width: { xs: '100%', sm: 'auto' } }}
            onClick={() => handleExport({ getRowsToExport: getFilteredRow })}
            startIcon={<Iconify icon="ic:baseline-download" width={18} />}
          >
            엑셀 다운로드
          </Button>
        </>
      }
    />
  );
};

export default ClientTypeToolbar;
