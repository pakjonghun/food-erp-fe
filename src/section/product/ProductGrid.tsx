import { DataGrid } from '@mui/x-data-grid';
import { useProducts } from '@/graphql/hooks/product/products';
import Toolbar from './ProductToolbar';
import { productColumnList } from './constants';
import { useReactiveVar } from '@apollo/client';
import { productKeyword, productTarget } from '@/store/backdata';
import LoadingRow from '@/components/dataGrid/LoadingRow';
import EmptyRow from '@/components/dataGrid/EmptyRow';

const ProductGrid = () => {
  const { data, loading } = useProducts();
  const rows = data?.products.data ?? [];
  const target = useReactiveVar(productTarget);
  const keyword = useReactiveVar(productKeyword);
  const filteredRow = rows.filter((row) => {
    const value = row[target as keyof typeof row];
    if (typeof value == 'string') {
      return value.toLowerCase().includes(keyword.toLowerCase());
    }

    if (typeof value == 'number') {
      return value.toString().includes(keyword);
    }

    return true;
  });

  return (
    <DataGrid
      density="compact"
      loading={loading}
      hideFooter
      hideFooterPagination
      disableColumnMenu={true}
      rows={filteredRow}
      columns={productColumnList}
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
        toolbar: Toolbar,
      }}
    />
  );
};

export default ProductGrid;
