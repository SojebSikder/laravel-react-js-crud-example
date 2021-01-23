import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Home from './Home';
import About from './About';

export default class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                    

                    <switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                    </switch>
                    
                </div>
            </Router>
        );
    }
}
