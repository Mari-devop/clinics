import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react';

const client = new ApolloClient({
  uri: 'https://clinics-white-fire-9212.fly.dev/graphql',
  cache: new InMemoryCache(),
});

const ApolloWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApolloWrapper;
