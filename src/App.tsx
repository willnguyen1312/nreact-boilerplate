import { Router } from '@reach/router';
import Nav from 'layout/Nav';
import AuthRoute from 'modules/auth';
import React, { Suspense, useState } from 'react';

const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const Profile = React.lazy(() => import('./pages/Profile'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

interface User {
  firstName: string;
  lastName: string;
}

export interface UserContextType {
  user: User | undefined;
  authenticateUser: (email: string, password: string) => void;
}

export const UserContext = React.createContext<UserContextType | null>(null);

interface User {
  firstName: string;
  lastName: string;
}

const App = () => {
  const [user, setUser] = useState<User>();

  const authenticateUser = async (email: string, password: string) => {
    // const newUser = await authService.login(email, password);
    setUser({
      firstName: '123',
      lastName: '123',
    });
  };

  const userContextValue: UserContextType = {
    user,
    authenticateUser,
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserContext.Provider value={userContextValue}>
        <Nav />

        <Router>
          <Home path="/" />
          <Login path="login" />
          <AuthRoute as={Profile} path="profile" />

          <NotFound default={true} />
        </Router>
      </UserContext.Provider>
    </Suspense>
  );
};

export default App;
