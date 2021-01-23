import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Add from './Add';
import Listing from './Listing';

export default class About extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Link to="/category">Listing</Link>
                    <Link to="/category/Add">Add</Link>

                    <Switch>
                        <Route exact path="/category" component={Listing} />
                        <Route path="/category/Add" component={Add} />
                    </Switch>
                    
                </Router>
            </div>
        );
    }
}
