import { RouteComponentProps } from '@reach/router';
import { UserContext, UserContextType } from 'App';
import React, {
  FunctionComponent,
  useCallback,
  useContext,
  useState,
} from 'react';

const Login: FunctionComponent<RouteComponentProps> = () => {
  const { authenticateUser } = useContext(UserContext) as UserContextType;
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      await authenticateUser(email, password);
    },
    [email, password, authenticateUser]
  );

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">email</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="email"
            value={email}
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
