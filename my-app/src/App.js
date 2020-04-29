import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Login from './Componrnts/Login/Login.js';
import SignUp from './Componrnts/SignUp/SignUp.js';
import Dashboard from './Componrnts/DashBoard/Dashboard.js';

function App() {
  return (
    <Router>
    <div className="App">
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
    </div>
    </Router>
  );
}

export default App;
