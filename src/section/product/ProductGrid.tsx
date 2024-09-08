import * as React from 'react';
import {
  DataGrid,
  GridColDef,
  gridSortedRowIdsSelector,
  GridToolbarQuickFilter,
  useGridApiContext,
  useGridApiRef,
} from '@mui/x-data-grid';
import { Button, Stack, Typography } from '@mui/material';
import Iconify from '@/components/icon/Iconify';
import { useProducts } from '@/graphql/hooks/product/products';
import ExcelUpload from './Action';

const getUnfilteredRows = (apiRef: any) => gridSortedRowIdsSelector(apiRef);

const ProductGrid = () => {
  const { data, loading } = useProducts();
  // const totalCount = data?.products.totalCount;
  const rows = data?.products.data ?? [];
  const apiRef = useGridApiRef();

  const handleExport = (options: any) => apiRef.current.exportDataAsCsv(options);

  const CustomToolBar = () => {
    const apiRef = useGridApiContext();
    return (
      <Stack sx={{ p: 3 }} direction="column" gap={2}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" gap={1}>
          <Typography sx={{ mb: 2 }}>제품 백데이터</Typography>
          <Stack direction="row" alignItems="center" gap={1}>
            <ExcelUpload />
            <Button startIcon={<Iconify icon="ic:baseline-download" width={18} />}>
              엑셀다운로드
            </Button>
          </Stack>
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <GridToolbarQuickFilter variant="outlined" placeholder="검색단어 입력" label="검색" />
        </Stack>
      </Stack>
    );
  };

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: '제품이름',
      flex: 1,
    },
    {
      field: 'code',
      headerName: '제품코드',
      minWidth: 200,
      maxWidth: 400,
    },
    {
      field: 'wonPrice',
      headerName: '원가',
      minWidth: 200,
      maxWidth: 400,
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
      density="compact"
      loading={loading}
      hideFooter
      hideFooterPagination
      disableColumnMenu={true}
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
        toolbar: CustomToolBar,
      }}
      rows={rows}
      columns={columns}
    />
  );
};

export default ProductGrid;
