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

export type DeleteUserInput = {
  id: Scalars['String']['input'];
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
  createUser: CreateUserOutput;
  delete: UserOutput;
  login?: Maybe<Scalars['Boolean']['output']>;
  me: UserOutput;
  updateUser: UserOutput;
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


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  findUser: FindUserOutput;
};


export type QueryFindUserArgs = {
  findUserInput: FindUserInput;
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


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;