import { FC, useEffect, useState } from 'react';
import BaseModal from '@/components/ui/modal/BaseModal';
import {
  AutocompleteRenderInputParams,
  Button,
  FormControl,
  FormGroup,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import {
  CreateProductForm,
  createProductSchema,
} from '@/app/back-data/product/_validations/createProductValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import CommonLoading from '@/components/ui/loading/CommonLoading';
import { snackMessage } from '@/store/snackMessage';
import { useCreateProduct } from '@/http/graphql/hooks/product/useCreateProduct';
import { useFindManyProductCategory } from '@/http/graphql/hooks/product-category/useFindProductCategories';
import useTextDebounce from '@/hooks/useTextDebounce';
import { LIMIT, PRODUCT_PREFIX } from '@/constants';
import { SelectItem } from '@/components/ui/select/SearchAutoComplete';
import useInfinityScroll from '@/hooks/useInfinityScroll';
import SearchAutoComplete from '@/components/ui/select/SearchAutoComplete';
import { modalSizeProps } from '@/components/commonStyles';
import { filterEmptyValues } from '@/util';
import NumberInput from '@/components/ui/input/NumberInput';

interface Props {
  open: boolean;
  onClose: () => void;
}

const AddSubsidiarytModal: FC<Props> = ({ open, onClose }) => {
  const [createProduct, { loading }] = useCreateProduct();

  const {
    reset,
    control,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateProductForm>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      code: '',
      name: '',
      barCode: '',
    },
  });

  const [categoryKeyword, setCategoryKeyword] = useState('');
  const delayedCategoryKeyword = useTextDebounce(categoryKeyword);

  const { data, networkStatus, refetch, fetchMore } = useFindManyProductCategory({
    keyword: delayedCategoryKeyword,
    limit: LIMIT,
    skip: 0,
  });
  const rows = data?.categories.data ?? [];

  const categoryName = watch('category');
  const category = rows.find((item) => item.name === categoryName);
  const categoryOption = category ? { _id: category!._id, label: category!.name } : null;

  const setCategory = (selectedCategory: SelectItem | null) => {
    if (!selectedCategory) return;
    setValue('category', selectedCategory?.label ?? '');
  };

  const callback: IntersectionObserverCallback = (entries) => {
    if (entries[0].isIntersecting) {
      if (networkStatus != 1 && networkStatus != 3) {
        const totalCount = data?.categories.totalCount;
        if (totalCount != null && totalCount > rows.length) {
          fetchMore({
            variables: {
              categoriesInput: {
                keyword: delayedCategoryKeyword,
                limit: LIMIT,
                skip: rows.length,
              },
            },
          });
        }
      }
    }
  };

  const scrollRef = useInfinityScroll({ callback });

  useEffect(() => {
    refetch();
  }, [delayedCategoryKeyword, refetch]);
  const onSubmit = (values: CreateProductForm) => {
    const newValues = filterEmptyValues(values) as CreateProductForm;
    createProduct({
      variables: {
        createProductInput: {
          ...newValues,
          category: category?._id,
        },
      },
      onCompleted: () => {
        snackMessage({ message: '제품등록이 완료되었습니다.', severity: 'success' });
        handleClose();
      },
      onError: (err) => {
        const message = err.message;
        snackMessage({ message: message ?? '제품등록이 실패했습니다.', severity: 'error' });
      },
    });
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <BaseModal open={open} onClose={handleClose}>
      <Typography variant="h6" component="h6" sx={{ mb: 2, fontWeight: 600 }}>
        제품 입력
      </Typography>
      <Typography sx={{ mb: 3 }}>새로운 제품을 입력합니다.</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup sx={modalSizeProps}>
          <Controller
            control={control}
            name="code"
            render={({ field }) => (
              <FormControl required>
                <TextField
                  {...field}
                  size="small"
                  required
                  label="제품코드"
                  error={!!errors.code?.message}
                  helperText={errors.code?.message ?? ''}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">{`${PRODUCT_PREFIX} - `}</InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <FormControl required>
                <TextField
                  size="small"
                  {...field}
                  required
                  label="제품이름"
                  error={!!errors.name?.message}
                  helperText={errors.name?.message ?? ''}
                />
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="salePrice"
            render={({ field }) => (
              <NumberInput
                field={field}
                label="판매가"
                error={!!errors.salePrice?.message}
                helperText={errors.salePrice?.message ?? ''}
              />
            )}
          />
          <Controller
            control={control}
            name="wonPrice"
            render={({ field }) => (
              <NumberInput
                field={field}
                label="원가"
                error={!!errors.wonPrice?.message}
                helperText={errors.wonPrice?.message ?? ''}
              />
            )}
          />
          <Controller
            control={control}
            name="leadTime"
            render={({ field }) => (
              <NumberInput
                field={field}
                label="리드타임(일)"
                error={!!errors.leadTime?.message}
                helperText={errors.leadTime?.message ?? ''}
              />
            )}
          />
          <Controller
            control={control}
            name="maintainDate"
            render={({ field }) => (
              <NumberInput
                field={field}
                label="최소 유지기간(날짜)"
                error={!!errors.maintainDate?.message}
                helperText={errors.maintainDate?.message ?? ''}
              />
            )}
          />
          <Controller
            control={control}
            name="barCode"
            render={({ field }) => (
              <FormControl>
                <TextField
                  size="small"
                  {...field}
                  label="바코드"
                  error={!!errors.barCode?.message}
                  helperText={errors.barCode?.message ?? ''}
                />
              </FormControl>
            )}
          />
          <SearchAutoComplete
            setValue={setCategory}
            value={categoryOption}
            scrollRef={scrollRef}
            renderSearchInput={(params: AutocompleteRenderInputParams) => {
              return (
                <Controller
                  control={control}
                  name="category"
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <TextField
                        {...field}
                        {...params}
                        onChange={(event) => {
                          field.onChange(event);
                          setCategoryKeyword(event.target.value);
                        }}
                        label="분류"
                        error={!!errors.category?.message}
                        helperText={errors.category?.message ?? ''}
                        size="small"
                      />
                    </FormControl>
                  )}
                />
              );
            }}
            options={rows.map((row) => ({ _id: row._id, label: row.name }))}
          />
        </FormGroup>
        <Stack direction="row" gap={1} sx={{ mt: 3 }} justifyContent="flex-end">
          <Button type="button" variant="outlined" onClick={handleClose}>
            취소
          </Button>
          <Button type="submit" endIcon={loading ? <CommonLoading /> : ''} variant="contained">
            생성
          </Button>
        </Stack>
      </form>
    </BaseModal>
  );
};

export default AddSubsidiarytModal;
