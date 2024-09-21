import { DataGrid, GridCellEditStartParams, GridCellParams } from '@mui/x-data-grid';
import { useProducts } from '@/graphql/hooks/product/products';
import Toolbar from './ProductToolbar';
import { productColumnList } from './constants';
import { useReactiveVar } from '@apollo/client';
import { productCount, productKeyword, productTarget } from '@/store/backdata';
import LoadingRow from '@/components/dataGrid/LoadingRow';
import EmptyRow from '@/components/dataGrid/EmptyRow';
import { useEffect, useState } from 'react';
import { useUpdateProduct } from '@/graphql/hooks/product/updateProduct';
import { Products } from '@/graphql/codegen/graphql';

const ProductGrid = () => {
  const [updateProduct, { loading: updating }] = useUpdateProduct();

  const { data, loading } = useProducts();
  const rows = data?.products.data ?? [];
  const target = useReactiveVar(productTarget);
  const keyword = useReactiveVar(productKeyword);
  const filteredRow = rows.filter((row) => {
    const value = row[target as keyof typeof row];
    if (typeof value == 'string') {
      return value.toLowerCase().includes(keyword.toLowerCase());
    }

    if (typeof value == 'number') {
      return value.toString().includes(keyword);
    }

    return true;
  });

  const handleSetCount = (count: number) => {
    productCount(count);
  };

  useEffect(() => {
    if (filteredRow.length) {
      handleSetCount(filteredRow.length);
    }
  }, [filteredRow.length]);

  const [editField, setEditField] = useState<keyof Products | null>('name');

  const handleCellUpdate = (newRow: Products, oldRow: any) => {
    console.log(editField);
    // // if (!editField) {
    // //   return;
    // }
    const rowId = newRow.id;
    const newValue = newRow[editField as keyof Products];

    updateProduct({
      variables: {
        updateProductInput: {
          id: rowId,
          [editField as keyof Products]: newValue,
        },
      },
      onCompleted: () => {
        return newRow;
      },
      onError: () => {
        return oldRow;
      },
    });
  };

  const handleCellEditStart = (params: GridCellEditStartParams) => {
    const field = params.field as keyof Products;
    setEditField(field);
  };

  const handleCellEditStop = () => {
    setEditField(null);
  };
  const handleEditError = () => {
    setEditField(null);
  };

  return (
    <DataGrid
      onProcessRowUpdateError={handleEditError}
      onCellEditStop={handleCellEditStop}
      onCellEditStart={handleCellEditStart}
      processRowUpdate={handleCellUpdate}
      disableRowSelectionOnClick
      checkboxSelection
      density="compact"
      loading={loading}
      disableColumnMenu={true}
      rows={filteredRow}
      columns={productColumnList}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
          printOptions: {
            disableToolbarButton: true,
          },
        },
      }}
      slots={{
        loadingOverlay: LoadingRow,
        noRowsOverlay: EmptyRow,
        toolbar: Toolbar,
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

export default ProductGrid;
