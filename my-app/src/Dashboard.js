import React, {Component, PropTypes} from 'react';
import Search from 'react-search'
import {BrowserRouter as Router, Switch, Route, Link,} from 'react-router-dom';
import Login from './Login.js';
import './Dashboard.css';
import SearchBar from './SearchBar.js';



const Dashboard = (props) => {





    return(
        <div>
        <div className='dashboard'>
            <header>
            <nav>
                <ul>
                    <Link className='link' to='/login'>log out</Link>
                    <div className='link-divider'>|</div>
                    <Link className='link' to='/signup'>new account</Link>
                </ul>
            </nav>
            <div className='header-text'>
            <h2 className='left-side'>Hey, there!</h2>
            <h2 className='left-side-btm'>Let's get started.</h2>
            <h1 className='song'>Song</h1>
            <h1 className='suggester'>Suggester</h1>
            </div>
            </header>
            <SearchBar />
        </div>
        </div>

    )
}


export default Dashboard