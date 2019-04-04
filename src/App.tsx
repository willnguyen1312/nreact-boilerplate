import { Router } from '@reach/router';
import ErrorBoudaryFallback from 'components/ErrorBoudaryFallback';
import Nav from 'layout/Nav';
import AuthRoute from 'modules/auth';
import React, { Suspense, useState } from 'react';
import ErrorBoundary from 'react-error-boundary';
import { Provider } from 'unstated';

const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Unstated = React.lazy(() => import('./pages/Unstated'));
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

const App = () => {
  const [user, setUser] = useState<User>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    <ErrorBoundary FallbackComponent={ErrorBoudaryFallback}>
      <Provider>
        <Suspense fallback={<div>Loading...</div>}>
          <UserContext.Provider value={userContextValue}>
            <Nav />

            <Router>
              <Home path="/" />
              <Login path="login" />
              <Unstated path="unstated" />
              <AuthRoute as={Profile} path="profile" />

              <NotFound default={true} />
            </Router>
          </UserContext.Provider>
        </Suspense>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
