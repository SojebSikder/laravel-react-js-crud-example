import React, { Component } from 'react';

import { Link, Route, Switch } from "react-router-dom";
import Add from './Add';
import Edit from './Edit';
import Listing from './Listing';

export default class About extends Component {
    render() {
        return (
            <div>
                <div>
                    <hr />
                    <Link to="/category" className="btn btn-primary">Listing</Link> &nbsp;
                    <Link to="/category/add" className="btn btn-primary">Add</Link>
                </div>
                

                <Switch>
                    <Route exact path="/category" component={Listing} />
                    <Route exact path="/category/add" component={Add} />
                    <Route exact path="/category/edit/:id" component={Edit} />
                </Switch>
                    

            </div>
        );
    }
}
