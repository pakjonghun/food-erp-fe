import { productColumnList } from '@/section/product/constants';
import { makeVar } from '@apollo/client';

export const productKeyword = makeVar('');
export const productTarget = makeVar(productColumnList[1].field);
