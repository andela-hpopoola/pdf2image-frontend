import React, { useState, useEffect } from 'react';
import Input from 'assets/form/Input';
import store from 'store2';
import Header from 'assets/components/Header';
import Alert from 'assets/components/Alert';
import Button from 'assets/components/Button';
import { Formik, Form } from 'formik';
import { Link, navigate } from '@reach/router';
import { loginSchema } from 'assets/form/validations';
import { sendFormData, getAuthStatus } from 'assets/helpers/api';
import { AUTH_STORE_KEY } from 'assets/helpers/config';

const Login = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const session = store(AUTH_STORE_KEY);
    session &&
      getAuthStatus(session.token).then(
        data => data.valid_user && navigate('/dashboard')
      );
    success && navigate('/dashboard');
  }, [success]);

  return (
    <div className="container">
      <div className="content">
        <div className="login-container">
          <Header />
          <Formik
            initialValues={{ email: 'demo@email.com', password: 'password1' }}
            validationSchema={loginSchema}
            onSubmit={(data, actions) => {
              sendFormData('/login', data)
                .then(data => {
                  store(AUTH_STORE_KEY, data);
                  setSuccess(true);
                  actions.setSubmitting(false);
                })
                .catch(error => {
                  setError(error);
                  actions.setSubmitting(false);
                });
            }}
            render={({ isSubmitting, handleSubmit }) => (
              <Form className="pt-5">
                <h4 className="login-text">Log into your Account</h4>
                {error && <Alert message={error} />}
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  formGroupLabel="Email"
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  formGroupLabel="Password"
                />
                <Button
                  className="btn-danger"
                  onClick={handleSubmit}
                  loading={isSubmitting}
                >
                  Sign in
                </Button>
              </Form>
            )}
          />
          <div className="text-center text-small pt-5">
            Dont have an account? <Link to="/register">Sign up now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
