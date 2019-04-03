import { RouteComponentProps } from '@reach/router';
import { IUserContext, UserContext } from 'App';
import React, {
  FunctionComponent,
  useCallback,
  useContext,
  useState,
} from 'react';

const Login: FunctionComponent<RouteComponentProps> = () => {
  const { authenticateUser, user } = useContext<IUserContext>(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (username === '123' && password === '123') {
        authenticateUser({
          firstName: 'Nam',
          lastName: 'Nguyen',
        });
      } else {
        alert('Oho');
      }
    },
    [username, password]
  );

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">username</label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={useCallback(
              (event: React.ChangeEvent<HTMLInputElement>) => {
                setUsername(event.target.value);
              },
              []
            )}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={useCallback(
              (event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value);
              },
              []
            )}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
