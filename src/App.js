import React from 'react';
import { Router } from '@reach/router';
import Login from 'assets/components/Login';
import Register from 'assets/components/Register';
import Dashboard from 'assets/components/Dashboard';
import Logout from 'assets/components/Logout';
import 'assets/sass/App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Login path="/" />
        <Register path="register" />
        <Dashboard path="dashboard" />
        <Logout path="logout" />
        <Login default />
      </Router>
    </div>
  );
}

export default App;
