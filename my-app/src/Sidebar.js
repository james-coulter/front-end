import React from 'react';
import {Link} from 'react-router-dom';
import {elastic as Menu} from 'react-burger-menu';
import './Sidebar.css';



const Sidebar = (props) => {
    return (
        <Menu>

        <Link to='/dashboard'>home</Link>

        <Link to='/'>log out</Link>

        <Link to='/signup'>sign up</Link>

        </Menu>
    )
}

export default Sidebar