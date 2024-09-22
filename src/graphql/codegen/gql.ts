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
    "\n  mutation login($loginInput: LoginInput!) {\n    login(loginInput: $loginInput)\n  }\n": types.LoginDocument,
    "\n  mutation createProduct($createProductInput: CreateProductInput!) {\n    createProduct(createProductInput: $createProductInput) {\n      id\n      name\n      barCode\n      wonPrice\n      salePrice\n      leadTime\n      deliveryType\n      category {\n        id\n        name\n      }\n    }\n  }\n": types.CreateProductDocument,
    "\n  query products {\n    products {\n      totalCount\n      data {\n        id\n        name\n        wonPrice\n        leadTime\n        salePrice\n        barCode\n        leadTime\n        deliveryType\n        category {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.ProductsDocument,
    "\n  mutation removeManyProduct($idListInput: IdListInput!) {\n    removeManyProduct(idListInput: $idListInput)\n  }\n": types.RemoveManyProductDocument,
    "\n  mutation updateProduct($updateProductInput: UpdateProductInput!) {\n    updateProduct(updateProductInput: $updateProductInput) {\n      id\n      name\n      barCode\n      wonPrice\n      salePrice\n      leadTime\n      deliveryType\n      category {\n        id\n        name\n      }\n    }\n  }\n": types.UpdateProductDocument,
    "\n  mutation createProductCategory($createProductCategoryInput: CreateProductCategoryInput!) {\n    createProductCategory(createProductCategoryInput: $createProductCategoryInput) {\n      id\n      name\n    }\n  }\n": types.CreateProductCategoryDocument,
    "\n  query productCategories {\n    productCategories {\n      totalCount\n      data {\n        id\n        name\n      }\n    }\n  }\n": types.ProductCategoriesDocument,
    "\n  mutation removeManyProductCategory($idListInput: IdListInput!) {\n    removeManyProductCategory(idListInput: $idListInput)\n  }\n": types.RemoveManyProductCategoryDocument,
    "\n  mutation updateProductCategory($updateProductCategoryInput: UpdateProductCategoryInput!) {\n    updateProductCategory(updateProductCategoryInput: $updateProductCategoryInput) {\n      id\n      name\n    }\n  }\n": types.UpdateProductCategoryDocument,
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
export function graphql(source: "\n  mutation login($loginInput: LoginInput!) {\n    login(loginInput: $loginInput)\n  }\n"): (typeof documents)["\n  mutation login($loginInput: LoginInput!) {\n    login(loginInput: $loginInput)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createProduct($createProductInput: CreateProductInput!) {\n    createProduct(createProductInput: $createProductInput) {\n      id\n      name\n      barCode\n      wonPrice\n      salePrice\n      leadTime\n      deliveryType\n      category {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createProduct($createProductInput: CreateProductInput!) {\n    createProduct(createProductInput: $createProductInput) {\n      id\n      name\n      barCode\n      wonPrice\n      salePrice\n      leadTime\n      deliveryType\n      category {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query products {\n    products {\n      totalCount\n      data {\n        id\n        name\n        wonPrice\n        leadTime\n        salePrice\n        barCode\n        leadTime\n        deliveryType\n        category {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query products {\n    products {\n      totalCount\n      data {\n        id\n        name\n        wonPrice\n        leadTime\n        salePrice\n        barCode\n        leadTime\n        deliveryType\n        category {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation removeManyProduct($idListInput: IdListInput!) {\n    removeManyProduct(idListInput: $idListInput)\n  }\n"): (typeof documents)["\n  mutation removeManyProduct($idListInput: IdListInput!) {\n    removeManyProduct(idListInput: $idListInput)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateProduct($updateProductInput: UpdateProductInput!) {\n    updateProduct(updateProductInput: $updateProductInput) {\n      id\n      name\n      barCode\n      wonPrice\n      salePrice\n      leadTime\n      deliveryType\n      category {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation updateProduct($updateProductInput: UpdateProductInput!) {\n    updateProduct(updateProductInput: $updateProductInput) {\n      id\n      name\n      barCode\n      wonPrice\n      salePrice\n      leadTime\n      deliveryType\n      category {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createProductCategory($createProductCategoryInput: CreateProductCategoryInput!) {\n    createProductCategory(createProductCategoryInput: $createProductCategoryInput) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation createProductCategory($createProductCategoryInput: CreateProductCategoryInput!) {\n    createProductCategory(createProductCategoryInput: $createProductCategoryInput) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query productCategories {\n    productCategories {\n      totalCount\n      data {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query productCategories {\n    productCategories {\n      totalCount\n      data {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation removeManyProductCategory($idListInput: IdListInput!) {\n    removeManyProductCategory(idListInput: $idListInput)\n  }\n"): (typeof documents)["\n  mutation removeManyProductCategory($idListInput: IdListInput!) {\n    removeManyProductCategory(idListInput: $idListInput)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateProductCategory($updateProductCategoryInput: UpdateProductCategoryInput!) {\n    updateProductCategory(updateProductCategoryInput: $updateProductCategoryInput) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation updateProductCategory($updateProductCategoryInput: UpdateProductCategoryInput!) {\n    updateProductCategory(updateProductCategoryInput: $updateProductCategoryInput) {\n      id\n      name\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;