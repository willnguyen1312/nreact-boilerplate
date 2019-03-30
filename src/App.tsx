import { Router } from '@reach/router';
import ErrorBoudaryFallback from 'components/ErrorBoudaryFallback';
import NavLink from 'components/NavLink';
import React, { Suspense } from 'react';
import ErrorBoundary from 'react-error-boundary';
import styled from 'styled-components';
import { Provider } from 'unstated';

const Articles = React.lazy(() => import('./screens/Articles'));
const Home = React.lazy(() => import('./screens/Home'));
const Unstate = React.lazy(() => import('./screens/Unstate'));
const NotFound = React.lazy(() => import('./screens/NotFound'));

const Nav = styled.nav`
  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorBoudaryFallback}>
      <Provider>
        <Suspense fallback={<div>Loading...</div>}>
          <Nav>
            <NavLink to="/">Home</NavLink>{' '}
            <NavLink to="/articles">Articles</NavLink>{' '}
            <NavLink to="/unstate">Unstate</NavLink>
          </Nav>

          <Router>
            <Home path="/" />
            <Articles path="/articles" />
            <Unstate path="/unstate" />

            <NotFound default={true} />
          </Router>
        </Suspense>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
