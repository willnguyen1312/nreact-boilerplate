import React from 'react';
import { fireEvent, render, waitForElement } from 'react-testing-library';
import { request } from 'service/api';
import UseTest from '.';

jest.mock('service/api', () => ({
  __esModule: true,
  request: jest.fn(),
}));

describe('Use Test component', () => {
  it('should work', async () => {
    (request as jest.Mock).mockResolvedValue('hello');
    const { queryByTestId, queryByText } = render(<UseTest />);
    const button = queryByTestId('request');

    expect(queryByText(/loading/i)).toBeInTheDocument();
    await waitForElement(() => queryByTestId('hello'));
    expect(queryByTestId('hello')).toHaveTextContent(/hello/i);

    fireEvent.click(button as HTMLButtonElement);

    await waitForElement(() => queryByTestId('hello'));

    expect(queryByTestId('hello')).toHaveTextContent(/123/i);
  });
});
