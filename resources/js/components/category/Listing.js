import React, { Component } from 'react';
import axios from 'axios';

export default class Listing extends Component {

    constructor()
    {
        super();
        this.state={
            categories:[]
        }

    }

    /**
     * Server address
     */
    getUrl()
    {
        return 'http://127.0.0.1:8000';
    }

    componentDidMount()
    {
        axios.get(this.getUrl()+"/category")
        .then(response=>{
            this.setState({categories:response.data});
        });
    }

    render() {
        return (
            <div>
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Category Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Updated At</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.categories.map(category=>{
                            return(
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{category.name}</td>
                                    <td>{category.active}</td>
                                    <td>{category.created_at}</td>
                                    <td>{category.updated_at}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
                </table>               
            </div>
        );
    }
}
