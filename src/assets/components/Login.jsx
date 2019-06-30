import React from 'react';
import Input from 'assets/form/Input';
import Header from 'assets/components/Header';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

const Login = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="login-container">
          <Header />
          <Formik
            initialValues={{ email: 'demo@email.com', password: 'password1' }}
            validationSchema={yup.object().shape({
              email: yup
                .string()
                .email()
                .required(),
              password: yup
                .string()
                .min(6)
                .required()
            })}
            onSubmit={(data, actions) => {
              setTimeout(() => {
                const url = 'http://localhost:4000/login';
                console.log('data', data);
                fetch(url, {
                  method: 'POST',
                  body: JSON.stringify(data),
                  headers: {
                    'Content-Type': 'application/json'
                  }
                })
                  .then(res => res.json())
                  .then(response =>
                    console.log('Success:', JSON.stringify(response))
                  )
                  .catch(error => console.error('Error:', error));
                actions.setSubmitting(false);
              }, 400);
            }}
            render={({ isSubmitting, handleSubmit }) => (
              <Form className="pt-5">
                <h4 className="login-text">Log into your Account</h4>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  formGroupLabel="Email"
                  isValidMessage="Enter a valid email address"
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
                  disabled={isSubmitting}
                >
                  Login
                </button>
              </Form>
            )}
          />
          <div className="text-center text-small pt-5">
            Dont have an account? Sign up now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
