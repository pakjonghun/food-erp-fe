import { makeVar } from '@apollo/client';

//product
export const productKeyword = makeVar('');
export const productTarget = makeVar('name');
export const productCount = makeVar(0);

//productCategory
export const productCategoryKeyword = makeVar('');
export const productCategoryTarget = makeVar('name');
export const productCategoryCount = makeVar(0);
