import { DeliveryType, ProductCategoryItem } from '@/graphql/codegen/graphql';
import { numberFormat } from '@/util';
import { GridColDef } from '@mui/x-data-grid';
import CategoryAutoComplete from './CategoryAutoComplete';
import { useProductCategories } from '@/graphql/hooks/productCategory/productCategories';

const useGetColumn = () => {
  const { data, loading } = useProductCategories();

  const productColumnList: GridColDef[] = [
    {
      field: 'id',
      headerName: '코드',
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: 'name',
      headerName: '이름',
      minWidth: 350,
      editable: true,
      flex: 1,
    },
    {
      field: 'category',
      headerName: '카테고리',
      minWidth: 150,
      flex: 0.5,
      valueGetter: (value: ProductCategoryItem, row) => {
        return value?.name;
      },
      editable: true,
      renderEditCell: (params) => (
        <CategoryAutoComplete
          editColProps={params}
          categories={data?.productCategories.data ?? []}
          loading={loading}
        />
      ),
    },
    {
      field: 'barCode',
      headerName: '바코드',
      minWidth: 150,
      editable: true,
      flex: 0.5,
    },
    {
      field: 'wonPrice',
      headerName: '원가',
      minWidth: 200,
      type: 'number',
      flex: 0.5,
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
      flex: 0.5,
      type: 'number',
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
      type: 'singleSelect',
      valueFormatter: (value) => {
        if (value == null) {
          return;
        }

        return value == DeliveryType.Free ? '무료배송' : '유료배송';
      },
      editable: true,
      valueOptions: () => {
        return [DeliveryType.Free, DeliveryType.Pay];
      },
    },
  ];

  return productColumnList;
};

export default useGetColumn;
