import { DeliveryType, ProductCategoryItem } from '@/graphql/codegen/graphql';
import { numberFormat } from '@/util';
import { GridColDef } from '@mui/x-data-grid';

export const productColumnList: GridColDef[] = [
  {
    field: 'id',
    headerName: '코드',
    minWidth: 100,
  },
  {
    field: 'name',
    headerName: '이름',
    minWidth: 350,
    flex: 1,
    editable: true,
  },
  {
    field: 'category',
    headerName: '카테고리',
    minWidth: 150,
    valueGetter: (value: ProductCategoryItem, row) => {
      return value?.name;
    },
    editable: true,
  },
  {
    field: 'barCode',
    headerName: '바코드',
    minWidth: 150,
    editable: true,
  },
  {
    field: 'wonPrice',
    headerName: '원가',
    minWidth: 200,
    valueFormatter: (value) => {
      if (value == null) {
        return;
      }

      return numberFormat(value);
    },
    editable: true,
  },
  {
    field: 'salePrice',
    headerName: '판매가',
    minWidth: 200,
    valueFormatter: (value) => {
      if (value == null) {
        return;
      }

      return numberFormat(value);
    },
    editable: true,
  },
  {
    field: 'deliveryType',
    headerName: '착불여부',
    minWidth: 100,
    valueFormatter: (value) => {
      if (value == null) {
        return;
      }

      return value == DeliveryType.Free ? '무료배송' : '유료배송';
    },
    editable: true,
  },
];
