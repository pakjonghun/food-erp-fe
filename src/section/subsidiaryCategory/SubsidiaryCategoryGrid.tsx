import { DataGrid, GridCellEditStartParams } from '@mui/x-data-grid';
import Toolbar from './SubsidiaryCategoryToolbar';
import EmptyRow from '@/components/dataGrid/EmptyRow';
import { FC, useCallback, useState } from 'react';
import { Subsidiaries } from '@/graphql/codegen/graphql';
import { useSnack } from '@/context/snackContext/SnackProvider';
import useGetColumn from './useGetColumn';
import { ApolloError } from '@apollo/client';
import { useUpdateSubsidiaryCategory } from '@/graphql/hooks/subsidiaryCategory/update';

interface Props {
  rows: any[];
  loading: boolean;
}

const SubsidiaryCategoryGrid: FC<Props> = ({ rows, loading }) => {
  const [updateSubsidiaryCategory, { loading: updating }] = useUpdateSubsidiaryCategory();

  const [editField, setEditField] = useState<keyof Subsidiaries | null>('name');
  const snack = useSnack();

  const handleCellUpdate = async (newRow: Subsidiaries, oldRow: any) => {
    try {
      if (!editField) {
        return oldRow;
      }
      const rowId = newRow.id;
      let newValue = newRow[editField as keyof Subsidiaries];
      let oldValue = oldRow[editField as keyof Subsidiaries];
      let field: string = editField;

      if (!newValue) {
        snack({ message: '카테고리 이름을 입력하세요.', variant: 'error' });
        return oldRow;
      }

      if (newValue == oldValue) {
        return oldRow;
      }

      const result = await updateSubsidiaryCategory({
        variables: {
          updateSubsidiaryCategoryInput: {
            id: rowId,
            [field as keyof Subsidiaries]: newValue,
          },
        },
      });

      snack({ message: '업데이트가 완료되었습니다.', variant: 'success' });
      return result.data?.updateSubsidiaryCategory ?? oldRow;
    } catch (err: unknown) {
      const apolloError = err as ApolloError;

      snack({ message: apolloError.message ?? '업데이트가 실패하였습니다.', variant: 'error' });
      return oldRow;
    }
  };

  const handleCellEditStart = (params: GridCellEditStartParams) => {
    const field = params.field as keyof Subsidiaries;
    setEditField(field);
  };

  const handleEditError = () => {
    snack({ message: '업데이트가 실패하였습니다.', variant: 'error' });
    setEditField(null);
  };

  const columns = useGetColumn();
  const toolbar = useCallback((params: any) => <Toolbar column={columns} {...params} />, []);

  return (
    <DataGrid
      onProcessRowUpdateError={handleEditError}
      onCellEditStart={handleCellEditStart}
      processRowUpdate={handleCellUpdate}
      disableRowSelectionOnClick
      checkboxSelection
      density="compact"
      loading={loading || updating}
      disableColumnMenu={true}
      rows={rows}
      columns={columns}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
          printOptions: {
            disableToolbarButton: true,
          },
        },
      }}
      slots={{
        noRowsOverlay: EmptyRow,
        toolbar,
      }}
      localeText={{
        MuiTablePagination: {
          labelDisplayedRows: ({ from, to, count }) => `현재 ${from}-${to} / 총 ${count}`,
          labelRowsPerPage: '페이지 당 데이터수',
        },
      }}
    />
  );
};

export default SubsidiaryCategoryGrid;
