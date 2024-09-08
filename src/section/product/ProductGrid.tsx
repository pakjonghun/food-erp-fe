import * as React from 'react';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import Iconify from '@/components/icon/Iconify';
import { useProducts } from '@/graphql/hooks/product/products';

const ProductGrid = () => {
  const { data, loading } = useProducts();
  const totalCount = data?.products.totalCount;
  const rows = data?.products.data ?? [];

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: '제품이름',
      flex: 1,
      editable: true,
    },
    {
      field: 'code',
      headerName: '제품코드',
      minWidth: 200,
      maxWidth: 400,
      editable: true,
    },
    {
      field: 'wonPrice',
      headerName: '원가',
      minWidth: 200,
      maxWidth: 400,
      editable: true,
    },
  ];

  const EmptyRow = () => {
    return (
      <Stack
        direction="row"
        sx={{ mt: 4, color: (theme) => theme.palette.grey[700] }}
        justifyContent="center"
      >
        검색된 데이터가 없습니다.
      </Stack>
    );
  };

  const LoadingRow = () => {
    return (
      <Stack
        direction="row"
        sx={{ mt: 4, color: (theme) => theme.palette.grey[700] }}
        justifyContent="center"
      >
        <Iconify icon="svg-spinners:3-dots-bounce" />
      </Stack>
    );
  };

  return (
    <DataGrid
      getRowHeight={() => 'auto'}
      hideFooter
      hideFooterPagination
      loading={loading}
      disableColumnMenu={true}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
        },
      }}
      slots={{
        loadingOverlay: LoadingRow,
        noRowsOverlay: EmptyRow,
        toolbar: GridToolbar,
      }}
      //   autoHeight
      rows={rows}
      columns={columns}
    />
  );
};

export default ProductGrid;
