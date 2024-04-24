import { BASE_URL } from '@/http/constants';
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import { createFragmentRegistry } from '@apollo/client/cache';
import { merge } from '@/util';

const link = createHttpLink({
  uri: `${BASE_URL}/graphql`,
  credentials: 'include',
});

export const client = new ApolloClient({
  cache: new InMemoryCache({
    fragments: createFragmentRegistry(gql`
      fragment LogFragment on Log {
        _id
        userId
        description
        logType
      }

      fragment CategoryFragment on Category {
        _id
        name
      }

      fragment UserFragment on User {
        id
        role
        createdAt
      }

      fragment ProductFragment on Product {
        _id
        code
        barCode
        name
        wonPrice
        salePrice
        leadTime
        maintainDate
        category {
          ...CategoryFragment
        }
      }

      fragment ClientFragment on Client {
        _id
        code
        name
        feeRate
        clientType
        businessName
        businessNumber
        payDate
        manager
        managerTel
        inActive
      }

      fragment ClientInfo on ClientInfo {
        _id {
          productCode
          mallId
        }
        averagePayCost
        accPayCost
        accCount
        accProfit
      }

      fragment SaleInfo on SaleInfo {
        accPayCost
        accCount
        name
        accProfit
        averagePayCost
      }
    `),
    typePolicies: {
      Query: {
        fields: {
          logs: {
            keyArgs: ['findLogsQuery', ['keyword']],
            merge,
          },
          productSales: {
            keyArgs: ['productSalesInput', ['keyword']],
            merge,
          },
          topClients: {
            keyArgs: false,
            merge,
          },
          clients: {
            keyArgs: ['clientsInput', ['keyword']],
            merge,
          },
          products: {
            keyArgs: ['productsInput', ['keyword']],
            merge,
          },
          categories: {
            keyArgs: ['categoriesInput', ['keyword']],
            merge,
          },
        },
      },
    },
  }),
  link,
});