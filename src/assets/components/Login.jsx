import React from 'react';

const Login = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="login-container">
          <div className="text-center">
            <h1 className="logo">
              PDF <span>CONVERTER</span>
            </h1>
            <p className="description">
              Instantly convert PDF documents to text or image format with this
              free PDF converter.
            </p>
          </div>
          <form className="pt-5">
            <h3 className="login-text">Login Now</h3>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-danger">
              Login
            </button>

            <div className="text-center text-small pt-5">
              Dont have an account? Sign up now
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
