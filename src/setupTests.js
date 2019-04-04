// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
// this adds jest-dom's custom assertions
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

console.error = jest.fn();
