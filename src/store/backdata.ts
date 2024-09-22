import { makeVar } from '@apollo/client';

//product
export const productKeyword = makeVar('');
export const productTarget = makeVar('name');
export const productCount = makeVar(0);

//productCategory
export const productCategoryKeyword = makeVar('');
export const productCategoryTarget = makeVar('name');
export const productCategoryCount = makeVar(0);

//subsidiary
export const subsidiaryKeyword = makeVar('');
export const subsidiaryTarget = makeVar('name');
export const subsidiaryCount = makeVar(0);

//subsidiaryCategory
export const subsidiaryCategoryKeyword = makeVar('');
export const subsidiaryCategoryTarget = makeVar('name');
export const subsidiaryCategoryCount = makeVar(0);

//warehouse
export const warehouseKeyword = makeVar('');
export const warehouseTarget = makeVar('name');
export const warehouseCount = makeVar(0);

//factory
export const factoryKeyword = makeVar('');
export const factoryTarget = makeVar('name');
export const factoryCount = makeVar(0);
