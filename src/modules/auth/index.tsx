import { RouteComponentProps } from '@reach/router';
import { UserContext } from 'App';
import Login from 'modules/login';
import React, { FunctionComponent, useContext } from 'react';

interface AuthRoute {
  as;
}

const AuthRoute: FunctionComponent<RouteComponentProps & AuthRoute> = props => {
  const { as: Component, ...rest } = props;
  const { user } = useContext(UserContext);
  return user ? <Component {...rest} /> : <Login />;
};

export default AuthRoute;
