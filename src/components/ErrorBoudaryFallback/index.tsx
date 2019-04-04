import React from 'react';
import { FallbackProps } from 'react-error-boundary';

const ErrorBoudaryFallback = ({ componentStack, error }: FallbackProps) => (
  <div>
    <p>
      <strong>Oops! An error occured!</strong>
    </p>
    <p>Here’s what we know…</p>
    <p>
      <strong>Error:</strong> {error && error.toString()}
    </p>
    <p>
      <strong>Stacktrace:</strong> {componentStack}
    </p>
  </div>
);

export default ErrorBoudaryFallback;
