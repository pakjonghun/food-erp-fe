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

export type Clients = {
  __typename?: 'Clients';
  businessName?: Maybe<Scalars['String']['output']>;
  businessNumber?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Date']['output'];
  feeRate?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  inActive?: Maybe<Scalars['Boolean']['output']>;
  isSabangService: Scalars['Boolean']['output'];
  manager?: Maybe<Scalars['String']['output']>;
  managerTel?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  payDate?: Maybe<Scalars['Int']['output']>;
  type: ClientType;
};

export type CreateClientInput = {
  businessName?: InputMaybe<Scalars['String']['input']>;
  businessNumber?: InputMaybe<Scalars['String']['input']>;
  feeRate?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['String']['input'];
  inActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSabangService: Scalars['Boolean']['input'];
  manager?: InputMaybe<Scalars['String']['input']>;
  managerTel?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  payDate?: InputMaybe<Scalars['Int']['input']>;
  type: ClientType;
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

export type DeleteProductCategoryInput = {
  id: Scalars['String']['input'];
};

export type DeleteUserInput = {
  id: Scalars['String']['input'];
};

export type DeleteWarehouseInput = {
  id: Scalars['String']['input'];
};

export enum DeliveryType {
  Free = 'FREE',
  Pay = 'PAY'
}

export type FindClientOutput = {
  __typename?: 'FindClientOutput';
  data: Array<Clients>;
  totalCount: Scalars['Int']['output'];
};

export type FindProductCategoryItem = {
  __typename?: 'FindProductCategoryItem';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type FindProductCategoryOutput = {
  __typename?: 'FindProductCategoryOutput';
  data: Array<FindProductCategoryItem>;
  totalCount: Scalars['Int']['output'];
};

export type FindProductOutput = {
  __typename?: 'FindProductOutput';
  data: Array<Products>;
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

export type LoginInput = {
  id: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  auth: Scalars['Boolean']['output'];
  createClient: Clients;
  createProduct: Products;
  createProductCategory: FindProductCategoryItem;
  createUser: CreateUserOutput;
  createWarehouse: Warehouses;
  delete: UserOutput;
  login?: Maybe<Scalars['Boolean']['output']>;
  me: UserOutput;
  removeClient: Clients;
  removeProduct: Products;
  removeProductCategory: FindProductCategoryItem;
  removeWarehouse: Warehouses;
  updateClient: Clients;
  updateProduct: Products;
  updateProductCategory: FindProductCategoryItem;
  updateUser: UserOutput;
  updateWarehouse: Warehouses;
};


export type MutationCreateClientArgs = {
  createClientInput: CreateClientInput;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationCreateProductCategoryArgs = {
  createProductCategoryInput: CreateProductCategoryInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateWarehouseArgs = {
  createWarehouseInput: CreateWarehouseInput;
};


export type MutationDeleteArgs = {
  deleteUserInput: DeleteUserInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRemoveClientArgs = {
  removeClientInput: IdInput;
};


export type MutationRemoveProductArgs = {
  removeProductInput: IdInput;
};


export type MutationRemoveProductCategoryArgs = {
  DeleteProductCategoryInput: DeleteProductCategoryInput;
};


export type MutationRemoveWarehouseArgs = {
  DeleteWarehouseInput: DeleteWarehouseInput;
};


export type MutationUpdateClientArgs = {
  updateClientInput: UpdateClientInput;
};


export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput;
};


export type MutationUpdateProductCategoryArgs = {
  updateProductCategoryInput: UpdateProductCategoryInput;
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
  clients: FindClientOutput;
  findUser: FindUserOutput;
  productCategories: FindProductCategoryOutput;
  products: FindProductOutput;
  warehouses: FindWarehouseOutput;
};


export type QueryFindUserArgs = {
  findUserInput: FindUserInput;
};

export type UpdateClientInput = {
  businessName?: InputMaybe<Scalars['String']['input']>;
  businessNumber?: InputMaybe<Scalars['String']['input']>;
  feeRate?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['String']['input'];
  inActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSabangService?: InputMaybe<Scalars['Boolean']['input']>;
  manager?: InputMaybe<Scalars['String']['input']>;
  managerTel?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  payDate?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<ClientType>;
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

export enum ClientType {
  Bender = 'bender',
  Cs = 'cs',
  Marketing = 'marketing',
  Offline = 'offline',
  OpenMarket = 'openMarket',
  Platform = 'platform',
  ProMall = 'proMall',
  Reward = 'reward',
  WholeSale = 'wholeSale'
}

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: boolean | null };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'FindProductOutput', totalCount: number, data: Array<{ __typename?: 'Products', id: string, name: string, wonPrice?: number | null, leadTime?: number | null }> } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const ProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"wonPrice"}},{"kind":"Field","name":{"kind":"Name","value":"leadTime"}}]}}]}}]}}]} as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>;