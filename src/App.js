import React from 'react';
import { Router } from '@reach/router';
import Login from 'assets/components/Login';
import Register from 'assets/components/Register';
import Dashboard from 'assets/components/Dashboard';
import 'assets/sass/App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Login path="/" />
        <Register path="register" />
        <Dashboard path="dashboard" />
      </Router>
    </div>
  );
}

export default App;
