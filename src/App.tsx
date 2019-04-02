import { Router } from '@reach/router';
import NavLink from 'components/NavLink';
import React, { Suspense } from 'react';
import styled from 'styled-components';

const Articles = React.lazy(() => import('./screens/Articles'));
const Home = React.lazy(() => import('./screens/Home'));
const UseTheme = React.lazy(() => import('./screens/UseTheme'));
const NotFound = React.lazy(() => import('./screens/NotFound'));

const Nav = styled.nav`
  a {
    text-decoration: none;
  }
`;

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Nav>
        <NavLink to="/">Home</NavLink>{' '}
        <NavLink to="/articles">Articles</NavLink>{' '}
        <NavLink to="/useTheme">UseTheme</NavLink>{' '}
      </Nav>

      <Router>
        <Home path="/" />
        <Articles path="/articles" />
        <UseTheme path="/useTheme" />

        <NotFound default={true} />
      </Router>
    </Suspense>
  );
};

export default App;
