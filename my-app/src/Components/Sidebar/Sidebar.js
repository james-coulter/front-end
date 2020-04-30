import React from 'react';
import {Link} from 'react-router-dom';
import {elastic as Menu} from 'react-burger-menu';
import './Sidebar.css';



const Sidebar = (props) => {
    return (
        <Menu>


        <Link to='/dashboard'>home</Link>

        <Link to='/login'>log out</Link>

        <Link to='/signup'>sign up</Link>

        <Link to='/dashboard'>custom</Link>

        <Link to='/dashboard'>insert link</Link>

        </Menu>
    )
}

export default Sidebar