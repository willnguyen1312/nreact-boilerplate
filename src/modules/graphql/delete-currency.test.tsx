import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { render, fireEvent } from 'react-testing-library';
import wait from 'waait';

import DeleteButton, { DELETE_CURRENCY_MUTATION } from './delete-currency';

it('should render without error', () => {
  render(
    <MockedProvider mocks={[]}>
      <DeleteButton />
    </MockedProvider>
  );
});

it('should render loading state initially', () => {
  const deleteCurrency = { currency: 'USD', rate: 1.0 };
  const mocks = [
    {
      request: {
        query: DELETE_CURRENCY_MUTATION,
        variables: { name: 'USD' },
      },
      result: { data: { deleteCurrency } },
    },
  ];

  const { getByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <DeleteButton />
    </MockedProvider>
  );

  // find the button and simulate a click
  const button = getByText(/Click me/i);
  fireEvent.click(button);

  expect(getByText('Loading...')).toBeDefined();
});

it('should delete and give visual feedback', async () => {
  const deleteCurrency = { currency: 'USD', rate: 1.0 };
  const mocks = [
    {
      request: {
        query: DELETE_CURRENCY_MUTATION,
        variables: { name: 'USD' },
      },
      result: { data: { deleteCurrency } },
    },
  ];

  const { getByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <DeleteButton />
    </MockedProvider>
  );

  // find the button and simulate a click
  const button = getByText(/Click me/i);
  fireEvent.click(button);

  await wait(0);

  expect(getByText('Deleted!')).toBeDefined();
});

it('should show error UI', async () => {
  const mocks = [
    {
      request: {
        query: DELETE_CURRENCY_MUTATION,
        variables: { name: 'USD' },
      },
      result: { errors: [{ message: 'boi' }] },
    },
  ];

  const { getByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <DeleteButton />
    </MockedProvider>
  );

  // find the button and simulate a click
  const button = getByText(/Click me/i);
  fireEvent.click(button);

  await wait(0);

  expect(getByText(/Error/i)).toBeDefined();
});
