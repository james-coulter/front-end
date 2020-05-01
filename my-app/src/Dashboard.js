import React from 'react';
// import Search from 'react-search'
import {Link} from 'react-router-dom';
// import Login from './Login.js';
import './Dashboard.css';
import SearchBar from './SearchBar.js';
import Sidebar from './Sidebar.js';
// import Carousel from './Carousel/Carousel.js';



const Dashboard = (props) => {





    return(
        <div>
        <Sidebar />
        <div className='dashboard'>
            <header>
            <nav>
                <ul>
                    <Link className='link' to='/'>log out</Link>
                    <div className='link-divider'>|</div>
                    <Link className='link' to='/signup'>new account</Link>
                </ul>
            </nav>
            <div className='header-text'>
            <h2 className='left-side'>Welcome back!</h2>
            <h2 className='left-side-btm'>Let's get searching.</h2>
            <h1 className='song'>Song</h1>
            <h1 className='suggester'>Suggester</h1>
            </div>
            </header>
            <SearchBar />
            {/* <div className='carouselDiv'>
            <Carousel />
            </div> */}
        </div>
        
        </div>

    )
}


export default Dashboard