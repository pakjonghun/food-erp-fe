import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/api/graphql',
  credentials: 'include',
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
