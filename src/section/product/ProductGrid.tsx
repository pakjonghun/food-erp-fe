import * as React from 'react';
import {
  DataGrid,
  GridColDef,
  gridExpandedSortedRowIdsSelector,
  GridToolbarQuickFilter,
  useGridApiContext,
} from '@mui/x-data-grid';
import { Button, Stack, Typography } from '@mui/material';
import Iconify from '@/components/icon/Iconify';
import { useProducts } from '@/graphql/hooks/product/products';
import ExcelUpload from './Action';

const getFilteredRow = ({ apiRef }: any) => gridExpandedSortedRowIdsSelector(apiRef);

const ProductGrid = () => {
  const { data, loading } = useProducts();
  const rows = data?.products.data ?? [];

  const CustomToolBar = () => {
    const apiRef = useGridApiContext();
    const handleExport = (options: any) => apiRef.current.exportDataAsCsv(options);
    return (
      <Stack sx={{ p: 3 }} direction="column" gap={2}>
        <Stack
          justifyContent="space-between"
          gap={1}
          sx={{
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
          }}
        >
          <Typography sx={{ mb: 2 }}>제품 백데이터</Typography>
          <Stack
            alignItems="center"
            gap={1}
            sx={{
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
            }}
          >
            <ExcelUpload sx={{ width: { xs: '100%', sm: 'auto' } }} />
            <Button
              sx={{ width: { xs: '100%', sm: 'auto' } }}
              onClick={() => handleExport({ getRowsToExport: getFilteredRow })}
              startIcon={<Iconify icon="ic:baseline-download" width={18} />}
            >
              엑셀다운로드
            </Button>
          </Stack>
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <GridToolbarQuickFilter
            sx={{
              width: {
                xs: '100%',
                sm: 'auto',
              },
              minWidth: 300,
            }}
            variant="outlined"
            placeholder="검색단어 입력"
            label="검색"
          />
        </Stack>
      </Stack>
    );
  };

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: '제품이름',
      flex: 1,
      minWidth: 300,
    },
    {
      field: 'id',
      headerName: '제품코드',
      minWidth: 200,
      maxWidth: 400,
      flex: 0.4,
    },
    {
      field: 'wonPrice',
      headerName: '원가',
      minWidth: 200,
      maxWidth: 400,
      flex: 0.5,
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
