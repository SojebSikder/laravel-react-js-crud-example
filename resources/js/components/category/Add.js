import React, { Component } from 'react';
import Config from '../../classes/Config.js';
import axios from 'axios';
import SuccessAlert from './SuccessAlert.js';

export default class Add extends Component {

    constructor()
    {
        super();
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state={
            category_name:'',
            alert_message:''
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
        .then(res=>{
            this.setState({alert_message:'success'});
        }).catch(error=>{
            this.setState({alert_message:'error'});
        });
    }


    render() {
        return (
            <div>
                <hr />
                {this.state.alert_message=="success"?<SuccessAlert type="success" msg="Data added successfully!" />:null}
                {this.state.alert_message=="error"?<SuccessAlert type="warning" msg="Error occured" />:null}
                
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
