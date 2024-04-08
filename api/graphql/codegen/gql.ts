/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment UserFragment on User {\n    id\n    role\n    createdAt\n  }\n": types.UserFragmentFragmentDoc,
    "\n  mutation updateUser($updateUserInput: UpdateUserDTO!) {\n    updateUser(updateUserInput: $updateUserInput) {\n      id\n      role\n      createdAt\n    }\n  }\n": types.UpdateUserDocument,
    "\n  mutation RemoveUser($id: String!) {\n    removeUser(id: $id) {\n      id\n    }\n  }\n": types.RemoveUserDocument,
    "\n  mutation CreateUser($createUserInput: CreateUserDTO!) {\n    createUser(createUserInput: $createUserInput) {\n      id\n      role\n    }\n  }\n": types.CreateUserDocument,
    "\n  query Users {\n    users {\n      id\n      role\n      createdAt\n    }\n  }\n": types.UsersDocument,
    "\n  query myInfo {\n    myInfo {\n      id\n      role\n      createdAt\n    }\n  }\n": types.MyInfoDocument,
    "\n  mutation UpdateProfile($updateProfileInput: UpdateProfileDTO!) {\n    updateProfile(updateProfileInput: $updateProfileInput) {\n      id\n      role\n    }\n  }\n": types.UpdateProfileDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserFragment on User {\n    id\n    role\n    createdAt\n  }\n"): (typeof documents)["\n  fragment UserFragment on User {\n    id\n    role\n    createdAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateUser($updateUserInput: UpdateUserDTO!) {\n    updateUser(updateUserInput: $updateUserInput) {\n      id\n      role\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation updateUser($updateUserInput: UpdateUserDTO!) {\n    updateUser(updateUserInput: $updateUserInput) {\n      id\n      role\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RemoveUser($id: String!) {\n    removeUser(id: $id) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation RemoveUser($id: String!) {\n    removeUser(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser($createUserInput: CreateUserDTO!) {\n    createUser(createUserInput: $createUserInput) {\n      id\n      role\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser($createUserInput: CreateUserDTO!) {\n    createUser(createUserInput: $createUserInput) {\n      id\n      role\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Users {\n    users {\n      id\n      role\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query Users {\n    users {\n      id\n      role\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query myInfo {\n    myInfo {\n      id\n      role\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query myInfo {\n    myInfo {\n      id\n      role\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateProfile($updateProfileInput: UpdateProfileDTO!) {\n    updateProfile(updateProfileInput: $updateProfileInput) {\n      id\n      role\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProfile($updateProfileInput: UpdateProfileDTO!) {\n    updateProfile(updateProfileInput: $updateProfileInput) {\n      id\n      role\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;