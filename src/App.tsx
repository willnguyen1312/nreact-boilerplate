import { Router } from '@reach/router';
import NavLink from 'components/NavLink';
import AuthRoute from 'modules/auth';
import React, { Suspense, useState } from 'react';
import styled from 'styled-components';

const Articles = React.lazy(() => import('./pages/Articles'));
const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const Profile = React.lazy(() => import('./pages/Profile'));
const UseGraphql = React.lazy(() => import('./pages/Graphql'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const Nav = styled.nav`
  a {
    text-decoration: none;
  }
`;

interface IUser {
  firstName: string;
  lastName: string;
}

export interface IUserContext {
  user: IUser;
  authenticateUser: (user: IUser) => void;
}

export const UserContext = React.createContext<IUserContext | any>('user');

interface IUser {
  firstName: string;
  lastName: string;
}

const App = () => {
  const [user, setUser] = useState<IUser>();

  const authenticateUser = (newUser: IUser) => {
    setUser(newUser);
  };

  const userContextValue = { user, authenticateUser };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserContext.Provider value={userContextValue}>
        <Nav>
          <NavLink to="/">Home</NavLink>{' '}
          <NavLink to="/articles">Articles</NavLink>{' '}
          <NavLink to="/login">Login</NavLink>{' '}
          <NavLink to="/useGraphql">UseGraphql</NavLink>{' '}
        </Nav>

        <Router>
          <Home path="/" />
          <Login path="login" />
          <Articles path="articles" />
          <UseGraphql path="/useGraphql" />
          <AuthRoute as={Profile} path="profile" />

          <NotFound default={true} />
        </Router>
      </UserContext.Provider>
    </Suspense>
  );
};

export default App;
