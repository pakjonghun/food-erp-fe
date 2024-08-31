'use client';

import { client } from '@/graphql/client/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ApolloClientProvider: FC<Props> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
