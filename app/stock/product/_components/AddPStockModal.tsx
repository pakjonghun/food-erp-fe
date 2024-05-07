import PlusOneIcon from '@mui/icons-material/PlusOne';
import BaseModal from '@/components/ui/modal/BaseModal';
import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputAdornment,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import {
  CreateClientForm,
  createClientSchema,
} from '../_validations/createClientValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import CommonLoading from '@/components/ui/loading/CommonLoading';
import { snackMessage } from '@/store/snackMessage';
import { modalSizeProps } from '@/components/commonStyles';
import { useCreateClient } from '@/http/graphql/hooks/client/useCreateClient';
import { ClientType } from '@/http/graphql/codegen/graphql';
import { filterEmptyValues } from '@/utils/common';
import { clientTypes } from '../constants';
import NumberInput from '@/components/ui/input/NumberInput';
import { CLIENT_PREFIX } from '@/constants';
import {
  CreateProductForm,
  CreateProductStockForm,
  createProductStockSchema,
} from '../_validations/createProductStockList';

const storages = [
  {
    _id: '123',
    name: 'Central Warehouse',
    phoneNumber: '123-456-7890',
    address: '123 Central Ave, Big City',
    note: 'Main distribution center',
  },
  {
    _id: '1234',
    name: 'East Side Storage',
    phoneNumber: '987-654-3210',
    address: '456 East St, Capital City',
    note: 'Handles east region deliveries',
  },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

const AddPStockModal: FC<Props> = ({ open, onClose }) => {
  const [createClient, { loading }] = useCreateClient();

  const {
    watch,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductStockForm>({
    resolver: zodResolver(createProductStockSchema),
    defaultValues: {
      productList: [],
    },
  });

  const onSubmit = (values: CreateProductStockForm) => {
    const newValues = filterEmptyValues(values) as CreateProductStockForm;
    // createClient({
    //   variables: {
    //     createClientInput: {
    //       ...newValues,
    //       feeRate: values.feeRate == null ? null : values.feeRate / 100,
    //     },
    //   },
    //   onCompleted: () => {
    //     snackMessage({
    //       message: '거래처등록이 완료되었습니다.',
    //       severity: 'success',
    //     });
    //     handleClose();
    //   },
    //   onError: (err) => {
    //     const message = err.message;
    //     snackMessage({
    //       message: message ?? '거래처등록이 실패했습니다.',
    //       severity: 'error',
    //     });
    //   },
    // });
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const { append, remove, replace, fields } = useFieldArray({
    control,
    name: 'productList',
  });

  const handleAppendProduct = () => {
    const initStock = {
      storage: '',
      product: '',
      count: 0,
    };

    append(initStock);
  };

  const handleRemoveProduct = (index: number) => {
    remove(index);
  };

  const currentProductList = watch('productList');

  const handleReplaceProduct = (
    index: number,
    newProduct: CreateProductForm
  ) => {
    const clonedFields = [...currentProductList];
    clonedFields[index] = newProduct;
    replace(clonedFields);
  };

  return (
    <BaseModal open={open} onClose={handleClose}>
      <Typography variant="h6" component="h6" sx={{ mb: 2, fontWeight: 600 }}>
        거래처 입력
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup sx={{ mt: 4 }}>
          <Stack direction="row" alignItems="center" gap={3}>
            <FormLabel>입고 재고 목록</FormLabel>
            <Button
              onClick={handleAppendProduct}
              variant="outlined"
              endIcon={<PlusOneIcon />}
            >
              추가
            </Button>
          </Stack>
          <Stack sx={{ mt: 2 }} gap={2}>
            {/* {fields.map((product, index) => {
              return (
                <WholeSaleProductSearch
                  selectedProductList={productList}
                  index={index}
                  control={control}
                  error={errors.productList?.[index]}
                  key={`${product.code}_${index}_'autocomplete`}
                  remove={remove}
                  replace={handleReplace}
                />
              );
            })} */}
          </Stack>
        </FormGroup>

        <Stack direction="row" gap={1} sx={{ mt: 3 }} justifyContent="flex-end">
          <Button type="button" variant="outlined" onClick={handleClose}>
            취소
          </Button>
          <Button
            type="submit"
            endIcon={loading ? <CommonLoading /> : ''}
            variant="contained"
          >
            입고
          </Button>
        </Stack>
      </form>
    </BaseModal>
  );
};

export default AddPStockModal;
