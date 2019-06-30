import React, { useState, useEffect } from 'react';
import Input from 'assets/form/Input';
import Header from 'assets/components/Header';
import Alert from 'assets/components/Alert';
import { Formik, Form } from 'formik';
import { Link, navigate } from '@reach/router';
import { loginSchema } from 'assets/form/validations';

const Login = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    success && navigate('/dashboard');
  }, [success]);

  return (
    <div className="container">
      <div className="content">
        <div className="login-container">
          <Header />
          <Formik
            initialValues={{ email: 'demo@email.come', password: 'password1' }}
            validationSchema={loginSchema}
            onSubmit={(data, actions) => {
              setTimeout(() => {
                const url = 'http://localhost:4000/login';
                fetch(url, {
                  method: 'POST',
                  body: JSON.stringify(data),
                  headers: {
                    'Content-Type': 'application/json'
                  }
                })
                  .then(response => {
                    if (response.ok) {
                      actions.setSubmitting(false);
                      setSuccess(true);
                    } else {
                      throw Error(`Invalid username or password`);
                    }
                  })
                  .catch(error => {
                    setError(error.message);
                    actions.setSubmitting(false);
                  });
              }, 400);
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
                  tooltip="Your email address"
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  formGroupLabel="Password"
                  tooltip="Your password"
                />
                <button
                  type="submit"
                  className="btn btn-danger text-uppercase"
                  onClick={handleSubmit}
                >
                  {isSubmitting && (
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    />
                  )}
                  Sign in
                </button>
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
