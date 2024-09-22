import { GridColDef } from '@mui/x-data-grid';

const useGetColumn = () => {
  const productColumnList: GridColDef[] = [
    {
      field: 'id',
      headerName: '코드',
      minWidth: 80,
      flex: 1,
    },
    {
      field: 'name',
      headerName: '이름',
      minWidth: 200,
      editable: true,
      flex: 1,
    },
  ];

  return productColumnList;
};

export default useGetColumn;
