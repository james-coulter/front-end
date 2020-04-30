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
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
    </div>
    </Router>
  );
}

export default App;
