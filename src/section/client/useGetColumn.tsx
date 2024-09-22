import { ProductCategoryItem } from '@/graphql/codegen/graphql';
import { percentFormat } from '@/util';
import { GridColDef } from '@mui/x-data-grid';
import CategoryAutoComplete from './ClientTypeAutoComplete';
import { useSnack } from '@/context/snackContext/SnackProvider';
import { GridApiCommunity } from '@mui/x-data-grid/internals';
import { useClientTypes } from '@/graphql/hooks/clientType/clientTypes';

const useGetColumn = (apiRef: GridApiCommunity) => {
  const { data, loading } = useClientTypes();
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
      minWidth: 100,
      editable: true,
      flex: 1,
    },
    {
      field: 'businessName',
      headerName: '상호',
      minWidth: 100,
      editable: true,
      flex: 1,
    },
    {
      field: 'businessNumber',
      headerName: '사업자 번호',
      minWidth: 100,
      editable: true,
      flex: 1,
    },

    {
      field: 'clientType',
      headerName: '거래처 타입',
      minWidth: 100,
      flex: 0.5,
      valueGetter: (value: ProductCategoryItem, row) => {
        return value?.name;
      },
      editable: true,
      renderEditCell: (params) => (
        <CategoryAutoComplete
          editColProps={params}
          clientTypes={data?.clientTypes.data ?? []}
          loading={loading}
        />
      ),
    },

    {
      field: 'isSabangService',
      headerName: '사방넷 지원',
      minWidth: 100,
      type: 'boolean',
      flex: 0.5,
      valueFormatter: (value) => {
        if (value == null) {
          return '미입력';
        }

        return value ? '지원' : '미지원';
      },
      editable: true,
    },

    {
      field: 'manager',
      headerName: '관리자',
      minWidth: 100,
      editable: true,
      flex: 0.7,
    },
    {
      field: 'managerTel',
      headerName: '연락처',
      minWidth: 100,
      editable: true,
      flex: 1,
    },

    {
      field: 'inActive',
      headerName: '거래여부',
      minWidth: 80,
      type: 'boolean',
      flex: 0.5,
      valueFormatter: (value) => {
        if (value == null) {
          return '미입력';
        }

        return value ? '거래중' : '거래종료';
      },
      editable: true,
    },

    {
      field: 'feeRate',
      headerName: '수수료',
      minWidth: 80,
      type: 'number',
      flex: 0.5,
      valueFormatter: (value) => {
        if (value == null) {
          return;
        }

        return percentFormat(value);
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

    {
      field: 'payDate',
      headerName: '결제일(매월)',
      minWidth: 80,
      type: 'number',
      flex: 0.5,
      valueFormatter: (value) => {
        if (value == null) {
          return '미입력';
        }

        return `${value}일`;
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
