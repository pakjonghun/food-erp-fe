import { DataGrid, GridCellEditStartParams } from '@mui/x-data-grid';
import Toolbar from './ClientTypeToolbar';
import EmptyRow from '@/components/dataGrid/EmptyRow';
import { FC, useCallback, useState } from 'react';
import { ClientTypes } from '@/graphql/codegen/graphql';
import { useSnack } from '@/context/snackContext/SnackProvider';
import useGetColumn from './useGetColumn';
import { ApolloError } from '@apollo/client';
import { useUpdateClientType } from '@/graphql/hooks/clientType/update';

interface Props {
  rows: any[];
  loading: boolean;
}

const ClientTypeGrid: FC<Props> = ({ rows, loading }) => {
  const [update, { loading: updating }] = useUpdateClientType();

  const [editField, setEditField] = useState<keyof ClientTypes | null>('name');
  const snack = useSnack();

  const handleCellUpdate = async (newRow: ClientTypes, oldRow: any) => {
    try {
      if (!editField) {
        return oldRow;
      }
      const rowId = newRow.id;
      let newValue = newRow[editField as keyof ClientTypes];
      let oldValue = oldRow[editField as keyof ClientTypes];
      let field: string = editField;

      if (!newValue) {
        snack({ message: '타입 이름을 입력하세요.', variant: 'error' });
        return oldRow;
      }

      if (newValue == oldValue) {
        return oldRow;
      }

      if (field == 'name' && !newValue) {
        snack({ message: '이름을 입력하세요.', variant: 'error' });
        return oldRow;
      }

      if (field == 'name' && !newValue) {
        newValue = null;
      }

      const result = await update({
        variables: {
          updateClientTypeInput: {
            id: rowId,
            [field as keyof ClientTypes]: newValue,
          },
        },
      });

      snack({ message: '업데이트가 완료되었습니다.', variant: 'success' });
      return result.data?.updateClientType ?? oldRow;
    } catch (err: unknown) {
      const apolloError = err as ApolloError;

      snack({ message: apolloError.message ?? '업데이트가 실패하였습니다.', variant: 'error' });
      return oldRow;
    }
  };

  const handleCellEditStart = (params: GridCellEditStartParams) => {
    const field = params.field as keyof ClientTypes;
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

export default ClientTypeGrid;
