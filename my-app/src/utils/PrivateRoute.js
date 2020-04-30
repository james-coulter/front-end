import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


export const privateRoute = ({ component: Component, ...rest }) => (
    <Route
        { ...rest }
            Render={props => 
            localStorage.getItem('token') ? (
                <Component { ...props } />
                ) : (
                    <Redirect to = '/login'/>
            )}
            />
);
