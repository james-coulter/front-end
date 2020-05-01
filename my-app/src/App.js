import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Login from './Login.js';
import SignUp from './SignUp.js';
import Dashboard from './Dashboard.js';

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path='/' component={Login} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/dashboard' component={Dashboard} />
    </div>
    </Router>
  );
}

export default App;
