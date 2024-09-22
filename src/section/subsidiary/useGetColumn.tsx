import { ProductCategoryItem } from '@/graphql/codegen/graphql';
import { numberFormat } from '@/util';
import { GridColDef } from '@mui/x-data-grid';
import CategoryAutoComplete from './CategoryAutoComplete';
import { useSnack } from '@/context/snackContext/SnackProvider';
import { GridApiCommunity } from '@mui/x-data-grid/internals';
import { useSubsidiaryCategories } from '@/graphql/hooks/subsidiaryCategory/subsidiaryCategories';

const useGetColumn = (apiRef: GridApiCommunity) => {
  const { data, loading } = useSubsidiaryCategories();
  const snack = useSnack();

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
      minWidth: 200,
      editable: true,
      flex: 1,
    },
    {
      field: 'category',
      headerName: '카테고리',
      minWidth: 140,
      flex: 0.5,
      valueGetter: (value: ProductCategoryItem, row) => {
        return value?.name;
      },
      editable: true,
      renderEditCell: (params) => (
        <CategoryAutoComplete
          editColProps={params}
          categories={data?.subsidiaryCategories.data ?? []}
          loading={loading}
        />
      ),
    },
    {
      field: 'wonPrice',
      headerName: '원가',
      minWidth: 80,
      type: 'number',
      flex: 0.5,
      valueFormatter: (value) => {
        if (value == null) {
          return;
        }

        return numberFormat(value);
      },
      editable: true,
      preProcessEditCellProps: (params) => {
        const hasError = params.props.value < 0;
        if (hasError) {
          snack({ message: '0이상의 값을 입력하세요.', variant: 'error' });
          apiRef.stopCellEditMode({ id: params.id, field: 'wonPrice', ignoreModifications: true });
        }
        return { ...params.props };
      },
    },
    {
      field: 'leadTime',
      headerName: '리드타임',
      minWidth: 80,
      type: 'number',
      flex: 0.5,
      valueFormatter: (value) => {
        if (value == null) {
          return;
        }

        return numberFormat(value);
      },
      preProcessEditCellProps: (params) => {
        const hasError = params.props.value < 0;
        if (hasError) {
          snack({ message: '0이상의 값을 입력하세요.', variant: 'error' });
          apiRef.stopCellEditMode({ id: params.id, field: 'leadTime', ignoreModifications: true });
        }
        return { ...params.props };
      },
      editable: true,
    },
  ];

  return productColumnList;
};

export default useGetColumn;
