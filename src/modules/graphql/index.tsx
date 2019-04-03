import { RouteComponentProps } from '@reach/router';
import ApolloClient from 'apollo-boost';
import React, { FC } from 'react';
import { ApolloProvider } from 'react-apollo';
import Currency from './currency';

const client = new ApolloClient({
  uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
});

const UseGraphql: FC<RouteComponentProps> = () => (
  <ApolloProvider client={client}>
    <Currency />
  </ApolloProvider>
);

export default UseGraphql;
