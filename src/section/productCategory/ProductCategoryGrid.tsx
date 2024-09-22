import { DataGrid, GridCellEditStartParams } from '@mui/x-data-grid';
import Toolbar from './ProductCategoryToolbar';
import EmptyRow from '@/components/dataGrid/EmptyRow';
import { FC, useCallback, useState } from 'react';
import { Products } from '@/graphql/codegen/graphql';
import { useSnack } from '@/context/snackContext/SnackProvider';
import useGetColumn from './useGetColumn';
import { ApolloError } from '@apollo/client';
import { useUpdateProductCategory } from '@/graphql/hooks/productCategory/updateProductCategory';

interface Props {
  rows: any[];
  loading: boolean;
}

const ProductCategoryGrid: FC<Props> = ({ rows, loading }) => {
  const [updateProductCategory, { loading: updating }] = useUpdateProductCategory();

  const [editField, setEditField] = useState<keyof Products | null>('name');
  const snack = useSnack();

  const handleCellUpdate = async (newRow: Products, oldRow: any) => {
    try {
      if (!editField) {
        return oldRow;
      }
      const rowId = newRow.id;
      let newValue = newRow[editField as keyof Products];
      let oldValue = oldRow[editField as keyof Products];
      let field: string = editField;

      if (!newValue) {
        snack({ message: '카테고리 이름을 입력하세요.', variant: 'error' });
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

      const result = await updateProductCategory({
        variables: {
          updateProductCategoryInput: {
            id: rowId,
            [field as keyof Products]: newValue,
          },
        },
      });

      snack({ message: '업데이트가 완료되었습니다.', variant: 'success' });
      return result.data?.updateProductCategory ?? oldRow;
    } catch (err: unknown) {
      const apolloError = err as ApolloError;

      snack({ message: apolloError.message ?? '업데이트가 실패하였습니다.', variant: 'error' });
      return oldRow;
    }
  };

  const handleCellEditStart = (params: GridCellEditStartParams) => {
    const field = params.field as keyof Products;
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

export default ProductCategoryGrid;
