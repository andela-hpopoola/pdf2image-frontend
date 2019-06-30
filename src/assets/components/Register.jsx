import React, { useState, useEffect } from 'react';
import Input from 'assets/form/Input';
import store from 'store2';
import Header from 'assets/components/Header';
import Alert from 'assets/components/Alert';
import Button from 'assets/components/Button';
import { Formik, Form } from 'formik';
import { Link, navigate } from '@reach/router';
import { registerSchema } from 'assets/form/validations';
import { sendFormData } from 'assets/helpers/api';
import { AUTH_STORE_KEY } from 'assets/helpers/config';

const Register = () => {
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
            initialValues={{
              email: 'demo@testing.com',
              password: '',
              confirmPassword: ''
            }}
            validationSchema={registerSchema}
            onSubmit={(data, actions) => {
              sendFormData('/register', data)
                .then(() => {
                  store(AUTH_STORE_KEY, data);
                  setSuccess(true);
                  actions.setSubmitting(false);
                })
                .catch(error => {
                  setError(error.message);
                  actions.setSubmitting(false);
                });
            }}
            render={({ isSubmitting, handleSubmit }) => (
              <Form className="pt-5">
                <h4 className="login-text">Register a new Account</h4>
                {error && <Alert message={error} />}
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  formGroupLabel="Email"
                  isValidMessage="Awesowe, you entered a valid email address"
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  formGroupLabel="Password"
                  isValidMessage="Awesome, your password is strong"
                />
                <Input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  formGroupLabel="Confirm Password"
                />
                <Button
                  className="btn-danger"
                  onClick={handleSubmit}
                  loading={isSubmitting}
                >
                  Register
                </Button>
              </Form>
            )}
          />
          <div className="text-center text-small pt-5">
            Have an account? <Link to="/">Sign in now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
