import { RouteComponentProps } from '@reach/router';
import { UserContext, UserContextType } from 'App';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { FunctionComponent, useContext } from 'react';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

interface LoginFormValues {
  email: string;
  password: string;
}

const Login: FunctionComponent<RouteComponentProps> = ({ navigate, path }) => {
  const { authenticateUser } = useContext(UserContext) as UserContextType;

  return (
    <>
      <h1>Login</h1>
      <Formik<LoginFormValues>
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={async (values, { setSubmitting }) => {
          const { email, password } = values;
          await authenticateUser(email, password);
          if (path && path.includes('login') && navigate) {
            navigate('/');
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field id="email" placeholder="email" type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field id="password" type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
