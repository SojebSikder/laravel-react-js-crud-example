import React, { Component } from 'react';

export default class Add extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="category_name" className="form-label">Category Name</label>
                        <input type="email" className="form-control" id="category_name" placeholder="Enter category" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
