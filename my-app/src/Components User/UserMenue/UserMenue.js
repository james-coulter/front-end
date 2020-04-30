import React from 'react';
import {Link} from 'react-router-dom';
import {stack as Menu} from 'react-burger-menu';
import './UserMenue.css';



const UserMenue = (props) => {
    return (
        <Menu>


        <Link to='/dashboard'>home</Link>

        <Link to='/login'>log out</Link>

        <Link to='/signup'>PlayList</Link>

        <Link to='/dashboard'>custom</Link>

        <Link to='/dashboard'>insert link</Link>

        </Menu>
    )
}

export default UserMenue