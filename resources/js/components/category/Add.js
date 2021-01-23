import React, { Component } from 'react';
import Config from '../../classes/Config.js';
import axios from 'axios';

export default class Add extends Component {

    constructor()
    {
        super();
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state={
            category_name:''
        }
    }

    onChangeCategoryName(e)
    {
        this.setState({category_name:e.target.value});
    }
    onSubmit(e)
    {
        e.preventDefault();
        const category ={
            category_name: this.state.category_name
        }
        axios.post(Config.getUrl()+"/category/store", category)
        .then(res=>console.log(res.data));
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="category_name" className="form-label">Category Name</label>
                        <input type="text" 
                        className="form-control" 
                        id="category_name" 
                        value={this.state.category_name}
                        onChange={this.onChangeCategoryName}
                        placeholder="Enter category" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
