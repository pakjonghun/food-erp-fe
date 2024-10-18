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

export type ProductNames = {
  __typename?: 'ProductNames';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  productId: Scalars['String']['output'];
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
  productNameList?: Maybe<Array<ProductNames>>;
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

export type ClientsQueryVariables = Exact<{ [key: string]: never; }>;


export type ClientsQuery = { __typename?: 'Query', clients: { __typename?: 'FindClientOutput', totalCount: number, data: Array<{ __typename?: 'Clients', id: string, name: string, isSabangService: boolean, feeRate?: number | null, businessName?: string | null, businessNumber?: string | null, payDate?: number | null, manager?: string | null, managerTel?: string | null, inActive?: boolean | null, clientType?: { __typename?: 'ClientTypes', id: string, name: string } | null }> } };

export type CreateClientMutationVariables = Exact<{
  createClientInput: CreateClientInput;
}>;


export type CreateClientMutation = { __typename?: 'Mutation', createClient: { __typename?: 'Clients', id: string, name: string, isSabangService: boolean, feeRate?: number | null, businessName?: string | null, businessNumber?: string | null, payDate?: number | null, manager?: string | null, managerTel?: string | null, inActive?: boolean | null, clientType?: { __typename?: 'ClientTypes', id: string, name: string } | null } };

export type RemoveManyClientMutationVariables = Exact<{
  idListInput: IdListInput;
}>;


export type RemoveManyClientMutation = { __typename?: 'Mutation', removeManyClient?: boolean | null };

export type UpdateClientMutationVariables = Exact<{
  updateClientInput: UpdateClientInput;
}>;


export type UpdateClientMutation = { __typename?: 'Mutation', updateClient: { __typename?: 'Clients', id: string, name: string, isSabangService: boolean, feeRate?: number | null, businessName?: string | null, businessNumber?: string | null, payDate?: number | null, manager?: string | null, managerTel?: string | null, inActive?: boolean | null, clientType?: { __typename?: 'ClientTypes', id: string, name: string } | null } };

export type ClientTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type ClientTypesQuery = { __typename?: 'Query', clientTypes: { __typename?: 'FindClientOutput', totalCount: number, data: Array<{ __typename?: 'Clients', id: string, name: string }> } };

export type CreateClientTypeMutationVariables = Exact<{
  createClientTypeInput: CreateClientTypeInput;
}>;


export type CreateClientTypeMutation = { __typename?: 'Mutation', createClientType: { __typename?: 'ClientTypeItem', id: string, name: string } };

export type RemoveManyClientTypeMutationVariables = Exact<{
  idListInput: IdListInput;
}>;


export type RemoveManyClientTypeMutation = { __typename?: 'Mutation', removeManyClientType?: boolean | null };

export type UpdateClientTypeMutationVariables = Exact<{
  updateClientTypeInput: UpdateClientTypeInput;
}>;


export type UpdateClientTypeMutation = { __typename?: 'Mutation', updateClientType: { __typename?: 'ClientTypeItem', id: string, name: string } };

export type CreateFactoryMutationVariables = Exact<{
  createFactoryInput: CreateFactoryInput;
}>;


export type CreateFactoryMutation = { __typename?: 'Mutation', createFactory: { __typename?: 'Factories', id: string, name: string, address?: string | null, note?: string | null, phoneNumber?: string | null } };

export type FactoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type FactoriesQuery = { __typename?: 'Query', factories: { __typename?: 'FindFactoryOutput', totalCount: number, data: Array<{ __typename?: 'Factories', id: string, name: string, address?: string | null, note?: string | null, phoneNumber?: string | null }> } };

export type RemoveManyFactoryMutationVariables = Exact<{
  idListInput: IdListInput;
}>;


export type RemoveManyFactoryMutation = { __typename?: 'Mutation', removeManyFactory?: boolean | null };

export type UpdateFactoryMutationVariables = Exact<{
  updateFactoryInput: UpdateFactoryInput;
}>;


export type UpdateFactoryMutation = { __typename?: 'Mutation', updateFactory: { __typename?: 'Factories', id: string, name: string, address?: string | null, note?: string | null, phoneNumber?: string | null } };

export type CreateProductMutationVariables = Exact<{
  createProductInput: CreateProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Products', id: string, name: string, barCode?: string | null, wonPrice?: number | null, salePrice?: number | null, leadTime?: number | null, deliveryType?: DeliveryType | null, category?: { __typename?: 'ProductCategories', id: string, name: string } | null } };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'FindProductOutput', totalCount: number, data: Array<{ __typename?: 'Products', id: string, name: string, wonPrice?: number | null, leadTime?: number | null, salePrice?: number | null, barCode?: string | null, deliveryType?: DeliveryType | null, category?: { __typename?: 'ProductCategories', id: string, name: string } | null }> } };

export type RemoveManyProductMutationVariables = Exact<{
  idListInput: IdListInput;
}>;


export type RemoveManyProductMutation = { __typename?: 'Mutation', removeManyProduct?: boolean | null };

export type UpdateProductMutationVariables = Exact<{
  updateProductInput: UpdateProductInput;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct: { __typename?: 'Products', id: string, name: string, barCode?: string | null, wonPrice?: number | null, salePrice?: number | null, leadTime?: number | null, deliveryType?: DeliveryType | null, category?: { __typename?: 'ProductCategories', id: string, name: string } | null } };

export type CreateProductCategoryMutationVariables = Exact<{
  createProductCategoryInput: CreateProductCategoryInput;
}>;


export type CreateProductCategoryMutation = { __typename?: 'Mutation', createProductCategory: { __typename?: 'ProductCategoryItem', id: string, name: string } };

export type ProductCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductCategoriesQuery = { __typename?: 'Query', productCategories: { __typename?: 'FindProductCategoryOutput', totalCount: number, data: Array<{ __typename?: 'ProductCategoryItem', id: string, name: string }> } };

export type RemoveManyProductCategoryMutationVariables = Exact<{
  idListInput: IdListInput;
}>;


export type RemoveManyProductCategoryMutation = { __typename?: 'Mutation', removeManyProductCategory?: boolean | null };

export type UpdateProductCategoryMutationVariables = Exact<{
  updateProductCategoryInput: UpdateProductCategoryInput;
}>;


export type UpdateProductCategoryMutation = { __typename?: 'Mutation', updateProductCategory: { __typename?: 'ProductCategoryItem', id: string, name: string } };

export type CreateSubsidiaryMutationVariables = Exact<{
  createSubsidiaryInput: CreateSubsidiaryInput;
}>;


export type CreateSubsidiaryMutation = { __typename?: 'Mutation', createSubsidiary: { __typename?: 'Subsidiaries', id: string, name: string, wonPrice?: number | null, leadTime?: number | null, category?: { __typename?: 'SubsidiaryCategories', id: string, name: string } | null } };

export type RemoveManySubsidiaryMutationVariables = Exact<{
  idListInput: IdListInput;
}>;


export type RemoveManySubsidiaryMutation = { __typename?: 'Mutation', removeManySubsidiary?: boolean | null };

export type SubsidiariesQueryVariables = Exact<{ [key: string]: never; }>;


export type SubsidiariesQuery = { __typename?: 'Query', subsidiaries: { __typename?: 'FindSubsidiaryOutput', totalCount: number, data: Array<{ __typename?: 'Subsidiaries', id: string, name: string, wonPrice?: number | null, leadTime?: number | null, category?: { __typename?: 'SubsidiaryCategories', id: string, name: string } | null }> } };

export type UpdateSubsidiaryMutationVariables = Exact<{
  updateSubsidiaryInput: UpdateSubsidiaryInput;
}>;


export type UpdateSubsidiaryMutation = { __typename?: 'Mutation', updateSubsidiary: { __typename?: 'Subsidiaries', id: string, name: string, wonPrice?: number | null, leadTime?: number | null, category?: { __typename?: 'SubsidiaryCategories', id: string, name: string } | null } };

export type CreateSubsidiaryCategoryMutationVariables = Exact<{
  createSubsidiaryCategoryInput: CreateSubsidiaryCategoryInput;
}>;


export type CreateSubsidiaryCategoryMutation = { __typename?: 'Mutation', createSubsidiaryCategory: { __typename?: 'SubsidiaryCategoryItem', id: string, name: string } };

export type RemoveManySubsidiaryCategoryMutationVariables = Exact<{
  idListInput: IdListInput;
}>;


export type RemoveManySubsidiaryCategoryMutation = { __typename?: 'Mutation', removeManySubsidiaryCategory?: boolean | null };

export type SubsidiaryCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type SubsidiaryCategoriesQuery = { __typename?: 'Query', subsidiaryCategories: { __typename?: 'FindSubsidiaryCategoryOutput', totalCount: number, data: Array<{ __typename?: 'SubsidiaryCategoryItem', id: string, name: string }> } };

export type UpdateSubsidiaryCategoryMutationVariables = Exact<{
  updateSubsidiaryCategoryInput: UpdateSubsidiaryCategoryInput;
}>;


export type UpdateSubsidiaryCategoryMutation = { __typename?: 'Mutation', updateSubsidiaryCategory: { __typename?: 'SubsidiaryCategoryItem', id: string, name: string } };

export type CreateWarehouseMutationVariables = Exact<{
  createWarehouseInput: CreateWarehouseInput;
}>;


export type CreateWarehouseMutation = { __typename?: 'Mutation', createWarehouse: { __typename?: 'Warehouses', id: string, name: string, address?: string | null, note?: string | null, phoneNumber?: string | null } };

export type RemoveManyWarehouseMutationVariables = Exact<{
  idListInput: IdListInput;
}>;


export type RemoveManyWarehouseMutation = { __typename?: 'Mutation', removeManyWarehouse?: boolean | null };

export type UpdateWarehouseMutationVariables = Exact<{
  updateWarehouseInput: UpdateWarehouseInput;
}>;


export type UpdateWarehouseMutation = { __typename?: 'Mutation', updateWarehouse: { __typename?: 'Warehouses', id: string, name: string, address?: string | null, note?: string | null, phoneNumber?: string | null } };

export type WarehousesQueryVariables = Exact<{ [key: string]: never; }>;


export type WarehousesQuery = { __typename?: 'Query', warehouses: { __typename?: 'FindWarehouseOutput', totalCount: number, data: Array<{ __typename?: 'Warehouses', id: string, name: string, address?: string | null, note?: string | null, phoneNumber?: string | null }> } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const ClientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isSabangService"}},{"kind":"Field","name":{"kind":"Name","value":"feeRate"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"businessNumber"}},{"kind":"Field","name":{"kind":"Name","value":"payDate"}},{"kind":"Field","name":{"kind":"Name","value":"manager"}},{"kind":"Field","name":{"kind":"Name","value":"managerTel"}},{"kind":"Field","name":{"kind":"Name","value":"inActive"}},{"kind":"Field","name":{"kind":"Name","value":"clientType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ClientsQuery, ClientsQueryVariables>;
export const CreateClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createClientInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createClientInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createClientInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isSabangService"}},{"kind":"Field","name":{"kind":"Name","value":"feeRate"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"businessNumber"}},{"kind":"Field","name":{"kind":"Name","value":"payDate"}},{"kind":"Field","name":{"kind":"Name","value":"manager"}},{"kind":"Field","name":{"kind":"Name","value":"managerTel"}},{"kind":"Field","name":{"kind":"Name","value":"inActive"}},{"kind":"Field","name":{"kind":"Name","value":"clientType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreateClientMutation, CreateClientMutationVariables>;
export const RemoveManyClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeManyClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeManyClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idListInput"}}}]}]}}]} as unknown as DocumentNode<RemoveManyClientMutation, RemoveManyClientMutationVariables>;
export const UpdateClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateClientInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateClientInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateClientInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isSabangService"}},{"kind":"Field","name":{"kind":"Name","value":"feeRate"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"businessNumber"}},{"kind":"Field","name":{"kind":"Name","value":"payDate"}},{"kind":"Field","name":{"kind":"Name","value":"manager"}},{"kind":"Field","name":{"kind":"Name","value":"managerTel"}},{"kind":"Field","name":{"kind":"Name","value":"inActive"}},{"kind":"Field","name":{"kind":"Name","value":"clientType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateClientMutation, UpdateClientMutationVariables>;
export const ClientTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"clientTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ClientTypesQuery, ClientTypesQueryVariables>;
export const CreateClientTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createClientType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createClientTypeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateClientTypeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClientType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createClientTypeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createClientTypeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateClientTypeMutation, CreateClientTypeMutationVariables>;
export const RemoveManyClientTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeManyClientType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeManyClientType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idListInput"}}}]}]}}]} as unknown as DocumentNode<RemoveManyClientTypeMutation, RemoveManyClientTypeMutationVariables>;
export const UpdateClientTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateClientType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateClientTypeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateClientTypeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClientType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateClientTypeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateClientTypeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateClientTypeMutation, UpdateClientTypeMutationVariables>;
export const CreateFactoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createFactory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createFactoryInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFactoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFactory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createFactoryInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createFactoryInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}}]}}]} as unknown as DocumentNode<CreateFactoryMutation, CreateFactoryMutationVariables>;
export const FactoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"factories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"factories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}}]}}]}}]} as unknown as DocumentNode<FactoriesQuery, FactoriesQueryVariables>;
export const RemoveManyFactoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeManyFactory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeManyFactory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idListInput"}}}]}]}}]} as unknown as DocumentNode<RemoveManyFactoryMutation, RemoveManyFactoryMutationVariables>;
export const UpdateFactoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateFactory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateFactoryInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateFactoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFactory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateFactoryInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateFactoryInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}}]}}]} as unknown as DocumentNode<UpdateFactoryMutation, UpdateFactoryMutationVariables>;
export const CreateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createProductInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createProductInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createProductInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"barCode"}},{"kind":"Field","name":{"kind":"Name","value":"wonPrice"}},{"kind":"Field","name":{"kind":"Name","value":"salePrice"}},{"kind":"Field","name":{"kind":"Name","value":"leadTime"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreateProductMutation, CreateProductMutationVariables>;
export const ProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"wonPrice"}},{"kind":"Field","name":{"kind":"Name","value":"leadTime"}},{"kind":"Field","name":{"kind":"Name","value":"salePrice"}},{"kind":"Field","name":{"kind":"Name","value":"barCode"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>;
export const RemoveManyProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeManyProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeManyProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idListInput"}}}]}]}}]} as unknown as DocumentNode<RemoveManyProductMutation, RemoveManyProductMutationVariables>;
export const UpdateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProductInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateProductInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProductInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"barCode"}},{"kind":"Field","name":{"kind":"Name","value":"wonPrice"}},{"kind":"Field","name":{"kind":"Name","value":"salePrice"}},{"kind":"Field","name":{"kind":"Name","value":"leadTime"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryType"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProductMutation, UpdateProductMutationVariables>;
export const CreateProductCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProductCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createProductCategoryInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProductCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProductCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createProductCategoryInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createProductCategoryInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateProductCategoryMutation, CreateProductCategoryMutationVariables>;
export const ProductCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"productCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ProductCategoriesQuery, ProductCategoriesQueryVariables>;
export const RemoveManyProductCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeManyProductCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeManyProductCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idListInput"}}}]}]}}]} as unknown as DocumentNode<RemoveManyProductCategoryMutation, RemoveManyProductCategoryMutationVariables>;
export const UpdateProductCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProductCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProductCategoryInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProductCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProductCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateProductCategoryInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProductCategoryInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateProductCategoryMutation, UpdateProductCategoryMutationVariables>;
export const CreateSubsidiaryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createSubsidiary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createSubsidiaryInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSubsidiaryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSubsidiary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createSubsidiaryInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createSubsidiaryInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"wonPrice"}},{"kind":"Field","name":{"kind":"Name","value":"leadTime"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreateSubsidiaryMutation, CreateSubsidiaryMutationVariables>;
export const RemoveManySubsidiaryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeManySubsidiary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeManySubsidiary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idListInput"}}}]}]}}]} as unknown as DocumentNode<RemoveManySubsidiaryMutation, RemoveManySubsidiaryMutationVariables>;
export const SubsidiariesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"subsidiaries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subsidiaries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"wonPrice"}},{"kind":"Field","name":{"kind":"Name","value":"leadTime"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SubsidiariesQuery, SubsidiariesQueryVariables>;
export const UpdateSubsidiaryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateSubsidiary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateSubsidiaryInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSubsidiaryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSubsidiary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateSubsidiaryInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateSubsidiaryInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"wonPrice"}},{"kind":"Field","name":{"kind":"Name","value":"leadTime"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateSubsidiaryMutation, UpdateSubsidiaryMutationVariables>;
export const CreateSubsidiaryCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createSubsidiaryCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createSubsidiaryCategoryInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSubsidiaryCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSubsidiaryCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createSubsidiaryCategoryInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createSubsidiaryCategoryInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateSubsidiaryCategoryMutation, CreateSubsidiaryCategoryMutationVariables>;
export const RemoveManySubsidiaryCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeManySubsidiaryCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeManySubsidiaryCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idListInput"}}}]}]}}]} as unknown as DocumentNode<RemoveManySubsidiaryCategoryMutation, RemoveManySubsidiaryCategoryMutationVariables>;
export const SubsidiaryCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"subsidiaryCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subsidiaryCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<SubsidiaryCategoriesQuery, SubsidiaryCategoriesQueryVariables>;
export const UpdateSubsidiaryCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateSubsidiaryCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateSubsidiaryCategoryInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSubsidiaryCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSubsidiaryCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateSubsidiaryCategoryInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateSubsidiaryCategoryInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateSubsidiaryCategoryMutation, UpdateSubsidiaryCategoryMutationVariables>;
export const CreateWarehouseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createWarehouse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createWarehouseInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateWarehouseInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createWarehouse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createWarehouseInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createWarehouseInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}}]}}]} as unknown as DocumentNode<CreateWarehouseMutation, CreateWarehouseMutationVariables>;
export const RemoveManyWarehouseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeManyWarehouse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idListInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeManyWarehouse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idListInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idListInput"}}}]}]}}]} as unknown as DocumentNode<RemoveManyWarehouseMutation, RemoveManyWarehouseMutationVariables>;
export const UpdateWarehouseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateWarehouse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateWarehouseInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateWarehouseInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateWarehouse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateWarehouseInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateWarehouseInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}}]}}]} as unknown as DocumentNode<UpdateWarehouseMutation, UpdateWarehouseMutationVariables>;
export const WarehousesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"warehouses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"warehouses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}}]}}]}}]} as unknown as DocumentNode<WarehousesQuery, WarehousesQueryVariables>;