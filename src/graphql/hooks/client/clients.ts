import { graphql } from '@/graphql/codegen';
import { useQuery } from '@apollo/client';

const clients = graphql(`
  query clients {
    clients {
      totalCount
      data {
        id
        name
        isSabangService
        feeRate
        businessName
        businessNumber
        payDate
        manager
        managerTel
        inActive
        clientType {
          id
          name
        }
      }
    }
  }
`);

export const useClients = () => {
  return useQuery(clients);
};
