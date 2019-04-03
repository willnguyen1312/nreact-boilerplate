import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { render } from 'react-testing-library';
import wait from 'waait';

import Currency, { GET_EXCHANGE_RATES_QUERY } from './currency';

it('should render without error', () => {
  render(
    <MockedProvider mocks={[]}>
      <Currency />
    </MockedProvider>
  );
});

it('should render loading state initially', () => {
  const { getByText } = render(
    <MockedProvider mocks={[]}>
      <Currency />
    </MockedProvider>
  );
  expect(getByText('Loading...')).toBeDefined();
});

it('should render currency conversions', async () => {
  const currencyMock = {
    request: { query: GET_EXCHANGE_RATES_QUERY },
    result: { data: { rates: [{ currency: 'LOL', rate: 999 }] } },
  };

  const { getByText } = render(
    <MockedProvider mocks={[currencyMock]} addTypename={false}>
      <Currency />
    </MockedProvider>
  );

  await wait(0);

  expect(getByText('LOL: 999')).toBeDefined();
});

it('should show error UI', async () => {
  const currencyMock = {
    request: { query: GET_EXCHANGE_RATES_QUERY },
    error: new Error('aw shucks'),
  };

  const { getByText } = render(
    <MockedProvider mocks={[currencyMock]} addTypename={false}>
      <Currency />
    </MockedProvider>
  );

  await wait(0); // wait for response

  expect(getByText('Error :(')).toBeDefined();
});
