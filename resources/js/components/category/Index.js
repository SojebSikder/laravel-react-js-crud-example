import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Add from './Add';
import Listing from './Listing';

export default class About extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <hr />
                        <Link to="/category" className="btn btn-primary">Listing</Link> &nbsp;
                        <Link to="/category/Add" className="btn btn-primary">Add</Link>
                    </div>
                    

                    <Switch>
                        <Route exact path="/category" component={Listing} />
                        <Route path="/category/Add" component={Add} />
                    </Switch>
                    
                </Router>
            </div>
        );
    }
}
