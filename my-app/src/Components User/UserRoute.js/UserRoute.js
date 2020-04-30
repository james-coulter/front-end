import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


function UserRoute() {

    return(
        <Router>
            <div className="UserApp">
                <Route path='/userpage' component={UserPage} />
                <Route path='/' component={} />
                <Route path='/' component={} />
                <Route path='/' component={} />
                <Route path='/' component={} />
                <Route path='/' component={} />
            </div>
        </Router>
    );
}

export default UserRoute;