/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Date custom scalar type */
  Date: { input: any; output: any; }
};

export type ClientTypeItem = {
  __typename?: 'ClientTypeItem';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ClientTypes = {
  __typename?: 'ClientTypes';
  clients?: Maybe<Array<Clients>>;
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Clients = {
  __typename?: 'Clients';
  businessName?: Maybe<Scalars['String']['output']>;
  businessNumber?: Maybe<Scalars['String']['output']>;
  clientType?: Maybe<ClientTypes>;
  clientTypeId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Date']['output'];
  feeRate?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  inActive?: Maybe<Scalars['Boolean']['output']>;
  isSabangService: Scalars['Boolean']['output'];
  manager?: Maybe<Scalars['String']['output']>;
  managerTel?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  payDate?: Maybe<Scalars['Int']['output']>;
};

export type CreateClientInput = {
  businessName?: InputMaybe<Scalars['String']['input']>;
  businessNumber?: InputMaybe<Scalars['String']['input']>;
  clientTypeName?: InputMaybe<Scalars['String']['input']>;
  feeRate?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['String']['input'];
  inActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSabangService: Scalars['Boolean']['input'];
  manager?: InputMaybe<Scalars['String']['input']>;
  managerTel?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  payDate?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateClientTypeInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateFactoryInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type CreateManyClientInput = {
  clientList: Array<CreateClientInput>;
};

export type CreateManyClientTypeInput = {
  clientTypeList: Array<CreateClientTypeInput>;
};

export type CreateManyFactoryInput = {
  factoryList: Array<CreateFactoryInput>;
};

export type CreateManyProductCategoryInput = {
  categoryList: Array<CreateProductCategoryInput>;
};

export type CreateManyProductInput = {
  products: Array<CreateProductInput>;
};

export type CreateManySubsidiaryCategoryInput = {
  categoryList: Array<CreateSubsidiaryCategoryInput>;
};

export type CreateManySubsidiaryInput = {
  subsidiaryList: Array<CreateSubsidiaryInput>;
};

export type CreateManyWarehouseInput = {
  warehouseList: Array<CreateWarehouseInput>;
};

export type CreateProductCategoryInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateProductInput = {
  barCode?: InputMaybe<Scalars['String']['input']>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  deliveryType?: InputMaybe<DeliveryType>;
  id: Scalars['String']['input'];
  leadTime?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  salePrice?: InputMaybe<Scalars['Int']['input']>;
  wonPrice?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateSubsidiaryCategoryInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateSubsidiaryInput = {
  categoryName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  leadTime?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  wonPrice?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateUserInput = {
  id: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: UserRole;
};

export type CreateUserOutput = {
  __typename?: 'CreateUserOutput';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  role: UserRole;
};

export type CreateWarehouseInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export enum DeliveryType {
  Free = 'FREE',
  Pay = 'PAY'
}

export type Factories = {
  __typename?: 'Factories';
  address?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type FindClientOutput = {
  __typename?: 'FindClientOutput';
  data: Array<Clients>;
  totalCount: Scalars['Int']['output'];
};

export type FindFactoryOutput = {
  __typename?: 'FindFactoryOutput';
  data: Array<Factories>;
  totalCount: Scalars['Int']['output'];
};

export type FindProductCategoryOutput = {
  __typename?: 'FindProductCategoryOutput';
  data: Array<ProductCategoryItem>;
  totalCount: Scalars['Int']['output'];
};

export type FindProductOutput = {
  __typename?: 'FindProductOutput';
  data: Array<Products>;
  totalCount: Scalars['Int']['output'];
};

export type FindSubsidiaryCategoryOutput = {
  __typename?: 'FindSubsidiaryCategoryOutput';
  data: Array<SubsidiaryCategoryItem>;
  totalCount: Scalars['Int']['output'];
};

export type FindSubsidiaryOutput = {
  __typename?: 'FindSubsidiaryOutput';
  data: Array<Subsidiaries>;
  totalCount: Scalars['Int']['output'];
};

export type FindUserInput = {
  keyword?: InputMaybe<Scalars['String']['input']>;
  length?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type FindUserOutput = {
  __typename?: 'FindUserOutput';
  data: Array<UserOutput>;
  totalCount: Scalars['Int']['output'];
};

export type FindWarehouseOutput = {
  __typename?: 'FindWarehouseOutput';
  data: Array<Warehouses>;
  totalCount: Scalars['Int']['output'];
};

export type IdInput = {
  id: Scalars['String']['input'];
};

export type IdListInput = {
  idList: Array<Scalars['String']['input']>;
};

export type LoginInput = {
  id: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  auth: Scalars['Boolean']['output'];
  createClient: Clients;
  createClientType: ClientTypeItem;
  createFactory: Factories;
  createManyClient?: Maybe<Scalars['Boolean']['output']>;
  createManyClientType?: Maybe<Scalars['Boolean']['output']>;
  createManyFactory?: Maybe<Scalars['Boolean']['output']>;
  createManyProduct?: Maybe<Scalars['Boolean']['output']>;
  createManyProductCategory?: Maybe<Scalars['Boolean']['output']>;
  createManySubsidiary?: Maybe<Scalars['Boolean']['output']>;
  createManySubsidiaryCategory?: Maybe<Scalars['Boolean']['output']>;
  createManyWarehouse?: Maybe<Scalars['Boolean']['output']>;
  createProduct: Products;
  createProductCategory: ProductCategoryItem;
  createSubsidiary: Subsidiaries;
  createSubsidiaryCategory: SubsidiaryCategoryItem;
  createUser: CreateUserOutput;
  createWarehouse: Warehouses;
  delete: UserOutput;
  login?: Maybe<Scalars['Boolean']['output']>;
  me: UserOutput;
  removeClient: Clients;
  removeClientType: ClientTypeItem;
  removeFactory: Factories;
  removeManyClient?: Maybe<Scalars['Boolean']['output']>;
  removeManyClientType?: Maybe<Scalars['Boolean']['output']>;
  removeManyFactory?: Maybe<Scalars['Boolean']['output']>;
  removeManyProduct?: Maybe<Scalars['Boolean']['output']>;
  removeManyProductCategory?: Maybe<Scalars['Boolean']['output']>;
  removeManySubsidiary?: Maybe<Scalars['Boolean']['output']>;
  removeManySubsidiaryCategory?: Maybe<Scalars['Boolean']['output']>;
  removeManyWarehouse?: Maybe<Scalars['Boolean']['output']>;
  removeProduct: Products;
  removeProductCategory: ProductCategoryItem;
  removeSubsidiary: Subsidiaries;
  removeSubsidiaryCategory: SubsidiaryCategoryItem;
  removeWarehouse: Warehouses;
  updateClient: Clients;
  updateClientType: ClientTypeItem;
  updateFactory: Factories;
  updateProduct: Products;
  updateProductCategory: ProductCategoryItem;
  updateSubsidiary: Subsidiaries;
  updateSubsidiaryCategory: SubsidiaryCategoryItem;
  updateUser: UserOutput;
  updateWarehouse: Warehouses;
};


export type MutationCreateClientArgs = {
  createClientInput: CreateClientInput;
};


export type MutationCreateClientTypeArgs = {
  createClientTypeInput: CreateClientTypeInput;
};


export type MutationCreateFactoryArgs = {
  createFactoryInput: CreateFactoryInput;
};


export type MutationCreateManyClientArgs = {
  createManyClientInput: CreateManyClientInput;
};


export type MutationCreateManyClientTypeArgs = {
  createManyClientTypeInput: CreateManyClientTypeInput;
};


export type MutationCreateManyFactoryArgs = {
  createManyFactoryInput: CreateManyFactoryInput;
};


export type MutationCreateManyProductArgs = {
  createManyProductInput: CreateManyProductInput;
};


export type MutationCreateManyProductCategoryArgs = {
  createManyProductCategoryInput: CreateManyProductCategoryInput;
};


export type MutationCreateManySubsidiaryArgs = {
  createManySubsidiaryInput: CreateManySubsidiaryInput;
};


export type MutationCreateManySubsidiaryCategoryArgs = {
  createManySubsidiaryCategoryInput: CreateManySubsidiaryCategoryInput;
};


export type MutationCreateManyWarehouseArgs = {
  createManyWarehouseInput: CreateManyWarehouseInput;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationCreateProductCategoryArgs = {
  createProductCategoryInput: CreateProductCategoryInput;
};


export type MutationCreateSubsidiaryArgs = {
  createSubsidiaryInput: CreateSubsidiaryInput;
};


export type MutationCreateSubsidiaryCategoryArgs = {
  createSubsidiaryCategoryInput: CreateSubsidiaryCategoryInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateWarehouseArgs = {
  createWarehouseInput: CreateWarehouseInput;
};


export type MutationDeleteArgs = {
  removeUserInput: IdInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRemoveClientArgs = {
  removeClientInput: IdInput;
};


export type MutationRemoveClientTypeArgs = {
  removeClientTypeInput: IdInput;
};


export type MutationRemoveFactoryArgs = {
  removeFactoryInput: IdInput;
};


export type MutationRemoveManyClientArgs = {
  idListInput: IdListInput;
};


export type MutationRemoveManyClientTypeArgs = {
  idListInput: IdListInput;
};


export type MutationRemoveManyFactoryArgs = {
  idListInput: IdListInput;
};


export type MutationRemoveManyProductArgs = {
  idListInput: IdListInput;
};


export type MutationRemoveManyProductCategoryArgs = {
  idListInput: IdListInput;
};


export type MutationRemoveManySubsidiaryArgs = {
  idListInput: IdListInput;
};


export type MutationRemoveManySubsidiaryCategoryArgs = {
  idListInput: IdListInput;
};


export type MutationRemoveManyWarehouseArgs = {
  idListInput: IdListInput;
};


export type MutationRemoveProductArgs = {
  removeProductInput: IdInput;
};


export type MutationRemoveProductCategoryArgs = {
  removeProductCategoryInput: IdInput;
};


export type MutationRemoveSubsidiaryArgs = {
  removeSubsidiaryInput: IdInput;
};


export type MutationRemoveSubsidiaryCategoryArgs = {
  removeSubsidiaryCategoryInput: IdInput;
};


export type MutationRemoveWarehouseArgs = {
  removeWarehouseInput: IdInput;
};


export type MutationUpdateClientArgs = {
  updateClientInput: UpdateClientInput;
};


export type MutationUpdateClientTypeArgs = {
  updateClientTypeInput: UpdateClientTypeInput;
};


export type MutationUpdateFactoryArgs = {
  updateFactoryInput: UpdateFactoryInput;
};


export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput;
};


export type MutationUpdateProductCategoryArgs = {
  updateProductCategoryInput: UpdateProductCategoryInput;
};


export type MutationUpdateSubsidiaryArgs = {
  updateSubsidiaryInput: UpdateSubsidiaryInput;
};


export type MutationUpdateSubsidiaryCategoryArgs = {
  updateSubsidiaryCategoryInput: UpdateSubsidiaryCategoryInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateWarehouseArgs = {
  updateWarehouseInput: UpdateWarehouseInput;
};

export type ProductCategories = {
  __typename?: 'ProductCategories';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products?: Maybe<Array<Products>>;
};

export type ProductCategoryItem = {
  __typename?: 'ProductCategoryItem';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Products = {
  __typename?: 'Products';
  barCode?: Maybe<Scalars['String']['output']>;
  category?: Maybe<ProductCategories>;
  createdAt: Scalars['Date']['output'];
  deliveryType?: Maybe<DeliveryType>;
  id: Scalars['ID']['output'];
  leadTime?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  salePrice?: Maybe<Scalars['Int']['output']>;
  wonPrice?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  clientTypes: FindClientOutput;
  clients: FindClientOutput;
  factories: FindFactoryOutput;
  findUser: FindUserOutput;
  productCategories: FindProductCategoryOutput;
  products: FindProductOutput;
  subsidiaries: FindSubsidiaryOutput;
  subsidiaryCategories: FindSubsidiaryCategoryOutput;
  warehouses: FindWarehouseOutput;
};


export type QueryFindUserArgs = {
  findUserInput: FindUserInput;
};

export type Subsidiaries = {
  __typename?: 'Subsidiaries';
  category?: Maybe<SubsidiaryCategories>;
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  leadTime?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  wonPrice?: Maybe<Scalars['Int']['output']>;
};

export type SubsidiaryCategories = {
  __typename?: 'SubsidiaryCategories';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type SubsidiaryCategoryItem = {
  __typename?: 'SubsidiaryCategoryItem';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type UpdateClientInput = {
  businessName?: InputMaybe<Scalars['String']['input']>;
  businessNumber?: InputMaybe<Scalars['String']['input']>;
  clientTypeName?: InputMaybe<Scalars['String']['input']>;
  feeRate?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['String']['input'];
  inActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSabangService?: InputMaybe<Scalars['Boolean']['input']>;
  manager?: InputMaybe<Scalars['String']['input']>;
  managerTel?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  payDate?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateClientTypeInput = {
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFactoryInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProductCategoryInput = {
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProductInput = {
  barCode?: InputMaybe<Scalars['String']['input']>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  deliveryType?: InputMaybe<DeliveryType>;
  id: Scalars['String']['input'];
  leadTime?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  salePrice?: InputMaybe<Scalars['Int']['input']>;
  wonPrice?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateSubsidiaryCategoryInput = {
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSubsidiaryInput = {
  categoryName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  leadTime?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  wonPrice?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateUserInput = {
  id: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRole>;
};

export type UpdateWarehouseInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UserOutput = {
  __typename?: 'UserOutput';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  role: UserRole;
};

export enum UserRole {
  Admin = 'ADMIN',
  Manager = 'MANAGER',
  Staff = 'STAFF'
}

export type Warehouses = {
  __typename?: 'Warehouses';
  address?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: boolean | null };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'FindProductOutput', totalCount: number, data: Array<{ __typename?: 'Products', id: string, name: string, wonPrice?: number | null, leadTime?: number | null }> } };

export type RemoveManyProductMutationVariables = Exact<{
  idListInput: IdListInput;
}>;


export type RemoveManyProductMutation = { __typename?: 'Mutation', removeManyProduct?: boolean | null };

export type ProductCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductCategoriesQuery = { __typename?: 'Query', productCategories: { __typename?: 'FindProductCategoryOutput', totalCount: number, data: Array<{ __typename?: 'ProductCategoryItem', id: string, name: string }> } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const ProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"wonPrice"}},{"kind":"Field","name":{"kind":"Name","value":"leadTime"}}]}}]}}]}}]} as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>;
export const RemoveManyProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeManyProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeManyProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idListInput"}}}]}]}}]} as unknown as DocumentNode<RemoveManyProductMutation, RemoveManyProductMutationVariables>;
export const ProductCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"productCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ProductCategoriesQuery, ProductCategoriesQueryVariables>;