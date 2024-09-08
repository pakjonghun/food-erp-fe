import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import Iconify from '@/components/icon/Iconify';

const ProductGrid = () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, editable: false },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      // valueGetter: (value: any, row: any) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
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
    <div style={{ width: '100%' }}>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid
          //   loading
          disableColumnMenu={true}
          slots={{
            loadingOverlay: LoadingRow,
            noRowsOverlay: EmptyRow,
          }}
          autoHeight
          rows={rows}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default ProductGrid;
