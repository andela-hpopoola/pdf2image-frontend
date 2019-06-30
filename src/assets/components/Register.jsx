import React, { useState, useEffect } from 'react';
import Input from 'assets/form/Input';
import Header from 'assets/components/Header';
import Alert from 'assets/components/Alert';
import { Formik, Form } from 'formik';
import { Link, navigate } from '@reach/router';
import { registerSchema } from 'assets/form/validations';

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
            initialValues={{ email: 'demo@email.com', password: 'password1' }}
            validationSchema={registerSchema}
            onSubmit={(data, actions) => {
              setTimeout(() => {
                const url = 'http://localhost:4000/register';
                console.log('data', data);
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
                  Register
                </button>
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
