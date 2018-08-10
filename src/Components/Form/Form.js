import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            defaultImage: 'https://picsum.photos/300/200',
            imgUrl: '',
            productName: '',
            price: 0,
            id: '',
            editing: false,
        }
    }


    componentDidUpdate() {

        // console.log(this.props.match);


        if (this.props.item.id !== this.state.id && this.props.item.id) {
            this.setState({
                imgUrl: this.props.item.imgurl,
                productName: this.props.item.productname,
                price: this.props.item.price,
                id: this.props.item.id,
                editing: true,
            })
        }
    }

    updateOneItem() {
        let { id, imgUrl, defaultImage, productName, price } = this.state;
        let image = imgUrl ? imgUrl : defaultImage;
        let editItem = {
            imgurl: image,
            productname: productName,
            price: price,
        }

        axios
            .put(`/api/inventory/${id}`, editItem)
            .then(response => {
                console.log(response)
                this.props.updateInventory(response.data)
            })
        this.handleCancel()
    }


    handleImgChange(e) {
        this.setState({
            imgUrl: e.target.value
        })

    }

    handleNameChange(e) {
        this.setState({
            productName: e.target.value
        })
        console.log(e);
    }

    handlePriceChange(e) {
        this.setState({
            price: e.target.value
        })
        console.log(e);
    }

    handleClearPrice() {
        this.setState({
            price: ''
        })
    }

    handleCancel() {
        this.setState({
            imgUrl: '',
            productName: '',
            price: 0,
            id: '',
            editing: false,
        })
        this.props.updateItem({
            imgUrl: '',
            productName: '',
            price: 0,
            id: ''
        })
    }

    handleAdd() {
        let image = this.state.imgUrl ? this.state.imgUrl : this.state.defaultImage;
        axios
            .post(`/api/inventory`, {
                "imgurl": image,
                "productname": this.state.productName,
                "price": this.state.price
            })
        this.props.getAllInventory()
        this.setState({
            imgUrl: '',
            productName: '',
            price: 0,
        })
    }

    addCurrentItem() {
        this.setState({
            imgUrl: this.props.item.imgurl,
            productName: this.props.item.productname,
            price: this.props.item.price,
            id: this.props.item.id,
        })
    }


    render() {
        let { editing, defaultImage, imgUrl } = this.state;
        let showImage = imgUrl ? imgUrl : defaultImage;

        console.log(this.props)


        return (
            <div className='form'>
                <div>

                    <img src={showImage} alt="" />
                    <h3>Iamge URL:</h3>
                    <input
                        type="text"
                        onChange={(e) => this.handleImgChange(e)}
                        placeholder='img URL goes here'
                        value={this.state.imgUrl}
                    />
                    <h3>ProductName</h3>
                    <input
                        type="text"
                        onChange={(e) => this.handleNameChange(e)}
                        placeholder='Product name goes here'
                        value={this.state.productName}
                    />
                    <h3>Price:</h3>
                    <input
                        type="text"
                        onChange={(e) => this.handlePriceChange(e)}
                        placeholder='price goes here'
                        value={this.state.price}
                    />
                </div>
                <div>
                    <button
                        onClick={() => this.handleCancel()}
                    >Cancel</button>
                    {editing ? (
                        <button
                            onClick={() => this.updateOneItem()}
                        >Update</button>
                    ) : (
                            <button
                                onClick={() => this.handleAdd()}
                            >Add to Inventory</button>
                        )}
                </div>
            </div>
        )
    }
}