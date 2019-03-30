import { Router } from '@reach/router';
import NavLink from 'components/NavLink';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import configureStore from './store';

const store = configureStore();

const Articles = React.lazy(() => import('./screens/Articles'));
const Home = React.lazy(() => import('./screens/Home'));
const Counter = React.lazy(() => import('./screens/Counter'));
const NotFound = React.lazy(() => import('./screens/NotFound'));

const Nav = styled.nav`
  a {
    text-decoration: none;
  }
`;

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <Nav>
          <NavLink to="/">Home</NavLink>{' '}
          <NavLink to="/articles">Articles</NavLink>{' '}
          <NavLink to="/counter">Counter</NavLink>
        </Nav>

        <Router>
          <Home path="/" />
          <Articles path="/articles" />
          <Counter path="/counter" />

          <NotFound default={true} />
        </Router>
      </Suspense>
    </Provider>
  );
};

export default App;
