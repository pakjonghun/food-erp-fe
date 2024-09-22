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
    "\n  query clients {\n    clients {\n      totalCount\n      data {\n        id\n        name\n        isSabangService\n        feeRate\n        businessName\n        businessNumber\n        payDate\n        manager\n        managerTel\n        inActive\n        clientType {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.ClientsDocument,
    "\n  mutation createClient($createClientInput: CreateClientInput!) {\n    createClient(createClientInput: $createClientInput) {\n      id\n      name\n      isSabangService\n      feeRate\n      businessName\n      businessNumber\n      payDate\n      manager\n      managerTel\n      inActive\n      clientType {\n        id\n        name\n      }\n    }\n  }\n": types.CreateClientDocument,
    "\n  mutation removeManyClient($idListInput: IdListInput!) {\n    removeManyClient(idListInput: $idListInput)\n  }\n": types.RemoveManyClientDocument,
    "\n  mutation updateClient($updateClientInput: UpdateClientInput!) {\n    updateClient(updateClientInput: $updateClientInput) {\n      id\n      name\n      isSabangService\n      feeRate\n      businessName\n      businessNumber\n      payDate\n      manager\n      managerTel\n      inActive\n      clientType {\n        id\n        name\n      }\n    }\n  }\n": types.UpdateClientDocument,
    "\n  query clientTypes {\n    clientTypes {\n      totalCount\n      data {\n        id\n        name\n      }\n    }\n  }\n": types.ClientTypesDocument,
    "\n  mutation createClientType($createClientTypeInput: CreateClientTypeInput!) {\n    createClientType(createClientTypeInput: $createClientTypeInput) {\n      id\n      name\n    }\n  }\n": types.CreateClientTypeDocument,
    "\n  mutation removeManyClientType($idListInput: IdListInput!) {\n    removeManyClientType(idListInput: $idListInput)\n  }\n": types.RemoveManyClientTypeDocument,
    "\n  mutation updateClientType($updateClientTypeInput: UpdateClientTypeInput!) {\n    updateClientType(updateClientTypeInput: $updateClientTypeInput) {\n      id\n      name\n    }\n  }\n": types.UpdateClientTypeDocument,
    "\n  mutation createFactory($createFactoryInput: CreateFactoryInput!) {\n    createFactory(createFactoryInput: $createFactoryInput) {\n      id\n      name\n      address\n      note\n      phoneNumber\n    }\n  }\n": types.CreateFactoryDocument,
    "\n  query factories {\n    factories {\n      totalCount\n      data {\n        id\n        name\n        address\n        note\n        phoneNumber\n      }\n    }\n  }\n": types.FactoriesDocument,
    "\n  mutation removeManyFactory($idListInput: IdListInput!) {\n    removeManyFactory(idListInput: $idListInput)\n  }\n": types.RemoveManyFactoryDocument,
    "\n  mutation updateFactory($updateFactoryInput: UpdateFactoryInput!) {\n    updateFactory(updateFactoryInput: $updateFactoryInput) {\n      id\n      name\n      address\n      note\n      phoneNumber\n    }\n  }\n": types.UpdateFactoryDocument,
    "\n  mutation createProduct($createProductInput: CreateProductInput!) {\n    createProduct(createProductInput: $createProductInput) {\n      id\n      name\n      barCode\n      wonPrice\n      salePrice\n      leadTime\n      deliveryType\n      category {\n        id\n        name\n      }\n    }\n  }\n": types.CreateProductDocument,
    "\n  query products {\n    products {\n      totalCount\n      data {\n        id\n        name\n        wonPrice\n        leadTime\n        salePrice\n        barCode\n        deliveryType\n        category {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.ProductsDocument,
    "\n  mutation removeManyProduct($idListInput: IdListInput!) {\n    removeManyProduct(idListInput: $idListInput)\n  }\n": types.RemoveManyProductDocument,
    "\n  mutation updateProduct($updateProductInput: UpdateProductInput!) {\n    updateProduct(updateProductInput: $updateProductInput) {\n      id\n      name\n      barCode\n      wonPrice\n      salePrice\n      leadTime\n      deliveryType\n      category {\n        id\n        name\n      }\n    }\n  }\n": types.UpdateProductDocument,
    "\n  mutation createProductCategory($createProductCategoryInput: CreateProductCategoryInput!) {\n    createProductCategory(createProductCategoryInput: $createProductCategoryInput) {\n      id\n      name\n    }\n  }\n": types.CreateProductCategoryDocument,
    "\n  query productCategories {\n    productCategories {\n      totalCount\n      data {\n        id\n        name\n      }\n    }\n  }\n": types.ProductCategoriesDocument,
    "\n  mutation removeManyProductCategory($idListInput: IdListInput!) {\n    removeManyProductCategory(idListInput: $idListInput)\n  }\n": types.RemoveManyProductCategoryDocument,
    "\n  mutation updateProductCategory($updateProductCategoryInput: UpdateProductCategoryInput!) {\n    updateProductCategory(updateProductCategoryInput: $updateProductCategoryInput) {\n      id\n      name\n    }\n  }\n": types.UpdateProductCategoryDocument,
    "\n  mutation createSubsidiary($createSubsidiaryInput: CreateSubsidiaryInput!) {\n    createSubsidiary(createSubsidiaryInput: $createSubsidiaryInput) {\n      id\n      name\n      wonPrice\n      leadTime\n      category {\n        id\n        name\n      }\n    }\n  }\n": types.CreateSubsidiaryDocument,
    "\n  mutation removeManySubsidiary($idListInput: IdListInput!) {\n    removeManySubsidiary(idListInput: $idListInput)\n  }\n": types.RemoveManySubsidiaryDocument,
    "\n  query subsidiaries {\n    subsidiaries {\n      totalCount\n      data {\n        id\n        name\n        wonPrice\n        leadTime\n        category {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.SubsidiariesDocument,
    "\n  mutation updateSubsidiary($updateSubsidiaryInput: UpdateSubsidiaryInput!) {\n    updateSubsidiary(updateSubsidiaryInput: $updateSubsidiaryInput) {\n      id\n      name\n      wonPrice\n      leadTime\n      category {\n        id\n        name\n      }\n    }\n  }\n": types.UpdateSubsidiaryDocument,
    "\n  mutation createSubsidiaryCategory(\n    $createSubsidiaryCategoryInput: CreateSubsidiaryCategoryInput!\n  ) {\n    createSubsidiaryCategory(createSubsidiaryCategoryInput: $createSubsidiaryCategoryInput) {\n      id\n      name\n    }\n  }\n": types.CreateSubsidiaryCategoryDocument,
    "\n  mutation removeManySubsidiaryCategory($idListInput: IdListInput!) {\n    removeManySubsidiaryCategory(idListInput: $idListInput)\n  }\n": types.RemoveManySubsidiaryCategoryDocument,
    "\n  query subsidiaryCategories {\n    subsidiaryCategories {\n      totalCount\n      data {\n        id\n        name\n      }\n    }\n  }\n": types.SubsidiaryCategoriesDocument,
    "\n  mutation updateSubsidiaryCategory(\n    $updateSubsidiaryCategoryInput: UpdateSubsidiaryCategoryInput!\n  ) {\n    updateSubsidiaryCategory(updateSubsidiaryCategoryInput: $updateSubsidiaryCategoryInput) {\n      id\n      name\n    }\n  }\n": types.UpdateSubsidiaryCategoryDocument,
    "\n  mutation createWarehouse($createWarehouseInput: CreateWarehouseInput!) {\n    createWarehouse(createWarehouseInput: $createWarehouseInput) {\n      id\n      name\n      address\n      note\n      phoneNumber\n    }\n  }\n": types.CreateWarehouseDocument,
    "\n  mutation removeManyWarehouse($idListInput: IdListInput!) {\n    removeManyWarehouse(idListInput: $idListInput)\n  }\n": types.RemoveManyWarehouseDocument,
    "\n  mutation updateWarehouse($updateWarehouseInput: UpdateWarehouseInput!) {\n    updateWarehouse(updateWarehouseInput: $updateWarehouseInput) {\n      id\n      name\n      address\n      note\n      phoneNumber\n    }\n  }\n": types.UpdateWarehouseDocument,
    "\n  query warehouses {\n    warehouses {\n      totalCount\n      data {\n        id\n        name\n        address\n        note\n        phoneNumber\n      }\n    }\n  }\n": types.WarehousesDocument,
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
export function graphql(source: "\n  query clients {\n    clients {\n      totalCount\n      data {\n        id\n        name\n        isSabangService\n        feeRate\n        businessName\n        businessNumber\n        payDate\n        manager\n        managerTel\n        inActive\n        clientType {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query clients {\n    clients {\n      totalCount\n      data {\n        id\n        name\n        isSabangService\n        feeRate\n        businessName\n        businessNumber\n        payDate\n        manager\n        managerTel\n        inActive\n        clientType {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createClient($createClientInput: CreateClientInput!) {\n    createClient(createClientInput: $createClientInput) {\n      id\n      name\n      isSabangService\n      feeRate\n      businessName\n      businessNumber\n      payDate\n      manager\n      managerTel\n      inActive\n      clientType {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createClient($createClientInput: CreateClientInput!) {\n    createClient(createClientInput: $createClientInput) {\n      id\n      name\n      isSabangService\n      feeRate\n      businessName\n      businessNumber\n      payDate\n      manager\n      managerTel\n      inActive\n      clientType {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation removeManyClient($idListInput: IdListInput!) {\n    removeManyClient(idListInput: $idListInput)\n  }\n"): (typeof documents)["\n  mutation removeManyClient($idListInput: IdListInput!) {\n    removeManyClient(idListInput: $idListInput)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateClient($updateClientInput: UpdateClientInput!) {\n    updateClient(updateClientInput: $updateClientInput) {\n      id\n      name\n      isSabangService\n      feeRate\n      businessName\n      businessNumber\n      payDate\n      manager\n      managerTel\n      inActive\n      clientType {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation updateClient($updateClientInput: UpdateClientInput!) {\n    updateClient(updateClientInput: $updateClientInput) {\n      id\n      name\n      isSabangService\n      feeRate\n      businessName\n      businessNumber\n      payDate\n      manager\n      managerTel\n      inActive\n      clientType {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query clientTypes {\n    clientTypes {\n      totalCount\n      data {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query clientTypes {\n    clientTypes {\n      totalCount\n      data {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createClientType($createClientTypeInput: CreateClientTypeInput!) {\n    createClientType(createClientTypeInput: $createClientTypeInput) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation createClientType($createClientTypeInput: CreateClientTypeInput!) {\n    createClientType(createClientTypeInput: $createClientTypeInput) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation removeManyClientType($idListInput: IdListInput!) {\n    removeManyClientType(idListInput: $idListInput)\n  }\n"): (typeof documents)["\n  mutation removeManyClientType($idListInput: IdListInput!) {\n    removeManyClientType(idListInput: $idListInput)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateClientType($updateClientTypeInput: UpdateClientTypeInput!) {\n    updateClientType(updateClientTypeInput: $updateClientTypeInput) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation updateClientType($updateClientTypeInput: UpdateClientTypeInput!) {\n    updateClientType(updateClientTypeInput: $updateClientTypeInput) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createFactory($createFactoryInput: CreateFactoryInput!) {\n    createFactory(createFactoryInput: $createFactoryInput) {\n      id\n      name\n      address\n      note\n      phoneNumber\n    }\n  }\n"): (typeof documents)["\n  mutation createFactory($createFactoryInput: CreateFactoryInput!) {\n    createFactory(createFactoryInput: $createFactoryInput) {\n      id\n      name\n      address\n      note\n      phoneNumber\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query factories {\n    factories {\n      totalCount\n      data {\n        id\n        name\n        address\n        note\n        phoneNumber\n      }\n    }\n  }\n"): (typeof documents)["\n  query factories {\n    factories {\n      totalCount\n      data {\n        id\n        name\n        address\n        note\n        phoneNumber\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation removeManyFactory($idListInput: IdListInput!) {\n    removeManyFactory(idListInput: $idListInput)\n  }\n"): (typeof documents)["\n  mutation removeManyFactory($idListInput: IdListInput!) {\n    removeManyFactory(idListInput: $idListInput)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateFactory($updateFactoryInput: UpdateFactoryInput!) {\n    updateFactory(updateFactoryInput: $updateFactoryInput) {\n      id\n      name\n      address\n      note\n      phoneNumber\n    }\n  }\n"): (typeof documents)["\n  mutation updateFactory($updateFactoryInput: UpdateFactoryInput!) {\n    updateFactory(updateFactoryInput: $updateFactoryInput) {\n      id\n      name\n      address\n      note\n      phoneNumber\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createProduct($createProductInput: CreateProductInput!) {\n    createProduct(createProductInput: $createProductInput) {\n      id\n      name\n      barCode\n      wonPrice\n      salePrice\n      leadTime\n      deliveryType\n      category {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createProduct($createProductInput: CreateProductInput!) {\n    createProduct(createProductInput: $createProductInput) {\n      id\n      name\n      barCode\n      wonPrice\n      salePrice\n      leadTime\n      deliveryType\n      category {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query products {\n    products {\n      totalCount\n      data {\n        id\n        name\n        wonPrice\n        leadTime\n        salePrice\n        barCode\n        deliveryType\n        category {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query products {\n    products {\n      totalCount\n      data {\n        id\n        name\n        wonPrice\n        leadTime\n        salePrice\n        barCode\n        deliveryType\n        category {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
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
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createSubsidiary($createSubsidiaryInput: CreateSubsidiaryInput!) {\n    createSubsidiary(createSubsidiaryInput: $createSubsidiaryInput) {\n      id\n      name\n      wonPrice\n      leadTime\n      category {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createSubsidiary($createSubsidiaryInput: CreateSubsidiaryInput!) {\n    createSubsidiary(createSubsidiaryInput: $createSubsidiaryInput) {\n      id\n      name\n      wonPrice\n      leadTime\n      category {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation removeManySubsidiary($idListInput: IdListInput!) {\n    removeManySubsidiary(idListInput: $idListInput)\n  }\n"): (typeof documents)["\n  mutation removeManySubsidiary($idListInput: IdListInput!) {\n    removeManySubsidiary(idListInput: $idListInput)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query subsidiaries {\n    subsidiaries {\n      totalCount\n      data {\n        id\n        name\n        wonPrice\n        leadTime\n        category {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query subsidiaries {\n    subsidiaries {\n      totalCount\n      data {\n        id\n        name\n        wonPrice\n        leadTime\n        category {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateSubsidiary($updateSubsidiaryInput: UpdateSubsidiaryInput!) {\n    updateSubsidiary(updateSubsidiaryInput: $updateSubsidiaryInput) {\n      id\n      name\n      wonPrice\n      leadTime\n      category {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation updateSubsidiary($updateSubsidiaryInput: UpdateSubsidiaryInput!) {\n    updateSubsidiary(updateSubsidiaryInput: $updateSubsidiaryInput) {\n      id\n      name\n      wonPrice\n      leadTime\n      category {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createSubsidiaryCategory(\n    $createSubsidiaryCategoryInput: CreateSubsidiaryCategoryInput!\n  ) {\n    createSubsidiaryCategory(createSubsidiaryCategoryInput: $createSubsidiaryCategoryInput) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation createSubsidiaryCategory(\n    $createSubsidiaryCategoryInput: CreateSubsidiaryCategoryInput!\n  ) {\n    createSubsidiaryCategory(createSubsidiaryCategoryInput: $createSubsidiaryCategoryInput) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation removeManySubsidiaryCategory($idListInput: IdListInput!) {\n    removeManySubsidiaryCategory(idListInput: $idListInput)\n  }\n"): (typeof documents)["\n  mutation removeManySubsidiaryCategory($idListInput: IdListInput!) {\n    removeManySubsidiaryCategory(idListInput: $idListInput)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query subsidiaryCategories {\n    subsidiaryCategories {\n      totalCount\n      data {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query subsidiaryCategories {\n    subsidiaryCategories {\n      totalCount\n      data {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateSubsidiaryCategory(\n    $updateSubsidiaryCategoryInput: UpdateSubsidiaryCategoryInput!\n  ) {\n    updateSubsidiaryCategory(updateSubsidiaryCategoryInput: $updateSubsidiaryCategoryInput) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation updateSubsidiaryCategory(\n    $updateSubsidiaryCategoryInput: UpdateSubsidiaryCategoryInput!\n  ) {\n    updateSubsidiaryCategory(updateSubsidiaryCategoryInput: $updateSubsidiaryCategoryInput) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createWarehouse($createWarehouseInput: CreateWarehouseInput!) {\n    createWarehouse(createWarehouseInput: $createWarehouseInput) {\n      id\n      name\n      address\n      note\n      phoneNumber\n    }\n  }\n"): (typeof documents)["\n  mutation createWarehouse($createWarehouseInput: CreateWarehouseInput!) {\n    createWarehouse(createWarehouseInput: $createWarehouseInput) {\n      id\n      name\n      address\n      note\n      phoneNumber\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation removeManyWarehouse($idListInput: IdListInput!) {\n    removeManyWarehouse(idListInput: $idListInput)\n  }\n"): (typeof documents)["\n  mutation removeManyWarehouse($idListInput: IdListInput!) {\n    removeManyWarehouse(idListInput: $idListInput)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateWarehouse($updateWarehouseInput: UpdateWarehouseInput!) {\n    updateWarehouse(updateWarehouseInput: $updateWarehouseInput) {\n      id\n      name\n      address\n      note\n      phoneNumber\n    }\n  }\n"): (typeof documents)["\n  mutation updateWarehouse($updateWarehouseInput: UpdateWarehouseInput!) {\n    updateWarehouse(updateWarehouseInput: $updateWarehouseInput) {\n      id\n      name\n      address\n      note\n      phoneNumber\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query warehouses {\n    warehouses {\n      totalCount\n      data {\n        id\n        name\n        address\n        note\n        phoneNumber\n      }\n    }\n  }\n"): (typeof documents)["\n  query warehouses {\n    warehouses {\n      totalCount\n      data {\n        id\n        name\n        address\n        note\n        phoneNumber\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;