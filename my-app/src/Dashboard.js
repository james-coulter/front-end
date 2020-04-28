import React, {useState} from 'react';
import './Dashboard.css';



const Dashboard = (props) => {



    return(
        <div className='dashboard'>
            <header>
            <nav>
                <ul>
                    <li>log out</li>
                    <li>|</li>
                    <li>new search</li>
                </ul>
            </nav>
            <div className='header-text'>
            <h1 className='song'>Song</h1>
            <h1 className='suggester'>Suggester</h1>
            </div>
            </header>
        </div>
    )
}

export default Dashboard