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

export type CreateProductCategoryInput = {
  name: Scalars['String']['input'];
};

export type CreateProductInput = {
  code: Scalars['String']['input'];
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

export type DeleteProductCategoryInput = {
  id: Scalars['String']['input'];
};

export type DeleteUserInput = {
  id: Scalars['String']['input'];
};

export type FindProductCategoryInput = {
  keyword?: InputMaybe<Scalars['String']['input']>;
  length?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type FindProductCategoryItem = {
  __typename?: 'FindProductCategoryItem';
  createdAt: Scalars['Date']['output'];
  id: Scalars['String']['output'];
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

export type LoginInput = {
  id: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  auth: Scalars['Boolean']['output'];
  createProduct: Products;
  createProductCategory: FindProductCategoryItem;
  createUser: CreateUserOutput;
  delete: UserOutput;
  login?: Maybe<Scalars['Boolean']['output']>;
  me: UserOutput;
  removeProduct: Products;
  removeProductCategory: FindProductCategoryItem;
  updateProduct: Products;
  updateProductCategory: FindProductCategoryItem;
  updateUser: UserOutput;
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


export type MutationDeleteArgs = {
  deleteUserInput: DeleteUserInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRemoveProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveProductCategoryArgs = {
  DeleteProductCategoryInput: DeleteProductCategoryInput;
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

export type ProductCategories = {
  __typename?: 'ProductCategories';
  createdAt: Scalars['Date']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  products?: Maybe<Array<Products>>;
};

export type Products = {
  __typename?: 'Products';
  category?: Maybe<Array<ProductCategories>>;
  code: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  leadTime?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  wonPrice: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  findProductCategory: FindProductCategoryOutput;
  findUser: FindUserOutput;
  product: Products;
  products: FindProductOutput;
};


export type QueryFindProductCategoryArgs = {
  findProductCategoryInput: FindProductCategoryInput;
};


export type QueryFindUserArgs = {
  findUserInput: FindUserInput;
};


export type QueryProductArgs = {
  id: Scalars['Int']['input'];
};

export type UpdateProductCategoryInput = {
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProductInput = {
  code?: InputMaybe<Scalars['String']['input']>;
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

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: boolean | null };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'FindProductOutput', totalCount: number, data: Array<{ __typename?: 'Products', id: string, code: string, name: string, wonPrice: number, leadTime?: number | null }> } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const ProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"wonPrice"}},{"kind":"Field","name":{"kind":"Name","value":"leadTime"}}]}}]}}]}}]} as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>;