import React, { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";

import Home from './Home';
import About from './About';
import Category from './category/Index';
import Error404 from './Error404';

export default class Header extends Component {
    render() {
        return (

            <div>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                            <li className="nav-item">
                                <Link to="/category" className="nav-link" >Category</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
        
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/category' component={Category} />
                    <Route exact path="/category/add" component={Category} />
                    <Route exact path="/category/edit/:id" component={Category} />

                    <Route exact path="/*" component={Error404} />
                </Switch>
            </div>
        );
    }
}
