import { GridColDef } from '@mui/x-data-grid';

const useGetColumn = () => {
  const productColumnList: GridColDef[] = [
    {
      field: 'id',
      headerName: '코드',
      minWidth: 80,
      flex: 0.5,
    },
    {
      field: 'name',
      headerName: '이름',
      minWidth: 100,
      editable: true,
      flex: 1,
    },
    {
      field: 'phoneNumber',
      headerName: '연락처',
      minWidth: 100,
      editable: true,
      flex: 1,
    },
    {
      field: 'address',
      headerName: '주소',
      minWidth: 140,
      editable: true,
      flex: 1.5,
    },
    {
      field: 'note',
      headerName: '비고',
      minWidth: 100,
      editable: true,
      flex: 1,
    },
  ];

  return productColumnList;
};

export default useGetColumn;
