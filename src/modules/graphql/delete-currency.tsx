import gql from 'graphql-tag';
import React, { useCallback } from 'react';
import { Mutation } from 'react-apollo';

export const DELETE_CURRENCY_MUTATION = gql`
  mutation deleteCurrency($name: String!) {
    deleteCurrency(name: $name) {
      currency
      rate
    }
  }
`;

// I'm not going to actually render this component, because this
// isn't a valid mutation on our sample server, and I don't want
// to handle all the errors :)
export default () => {
  // tslint:disable-next-line: no-empty
  const onErrorHandler = useCallback(() => {}, []);
  const onClickHandler = useCallback(
    mutate => () => {
      mutate({ variables: { name: 'USD' } });
    },
    []
  );
  return (
    <Mutation mutation={DELETE_CURRENCY_MUTATION} onError={onErrorHandler}>
      {(mutate, { loading, error, data }) => {
        if (loading) {
          return <p>Loading...</p>;
        }
        if (error) {
          return <p>Error :(</p>;
        }
        if (data) {
          return <p>Deleted!</p>;
        }

        return (
          <button onClick={onClickHandler(mutate)}>
            Click me to Delete the USD!
          </button>
        );
      }}
    </Mutation>
  );
};
