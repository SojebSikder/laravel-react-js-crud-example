import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Home from './Home';
import About from './About';

export default class Header extends Component {
    render() {
        return (

            <div>
            <Router>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" >About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
        

                <switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                </switch>
             </Router>
            </div>
        );
    }
}
