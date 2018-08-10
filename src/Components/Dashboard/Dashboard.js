import React, { Component } from 'react';
import axios from 'axios';

import Product from '../Product/Product';
import Form from '../Form/Form';


export default class Dashboard extends Component {
    constructor() {
        super();

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id) {
        axios.delete(`/api/inventory/${id}`)
            .then(response => {
                console.log(response)
                this.props.updateInventory(response.data)
            })
        // this.props.getAllInventory();
    }


    render() {
        const { inventory } = this.props;
        console.log(this.props)

        let mappedItems = inventory.map((item, i) => {
            return (
                <Product
                    key={item.id}
                    item={item}
                    handleDelete={this.handleDelete}
                    updateItem={this.props.updateItem}
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
