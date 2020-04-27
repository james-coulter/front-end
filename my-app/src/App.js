import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Login from './Login.js';
import SignUp from './SignUp.js';

function App() {
  return (
    <div className="App">
        <Login />
        <SignUp />
    </div>
  );
}

export default App;
