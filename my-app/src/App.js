import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login.js';
import SignUp from './Components/SignUp/SignUp.js';
import Dashboard from './Components/DashBoard/Dashboard.js';

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
