import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import App from './App';

it('renders welcome message', async () => {
  const { getByText } = render(<App />);
  expect(getByText(/loading/i)).toBeInTheDocument();

  await waitForElement(() => getByText(/home/i));
});
