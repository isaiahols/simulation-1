import React, { Component } from 'react';
import axios from 'axios';

import Product from '../Product/Product';


export default class Dashboard extends Component {
    constructor() {
        super();

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id) {
        axios.delete(`/api/inventory/${id}`)
            .then(response => {
                console.log(response)
            })
        this.props.getAllInventory();
    }


    render() {
        const { inventory } = this.props;

        let mappedItems = inventory.map((item, i) => {
            return (
            <Product 
                key={item.id} 
                item={item} 
                handleDelete={this.handleDelete}
            />)
        })

        return (
            <div className='dashboard' >
                The is Dashboard

                {mappedItems}
            </div>
        )
    }
}
