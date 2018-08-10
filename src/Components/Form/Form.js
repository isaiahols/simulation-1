import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor(){
        super();
        this.state={
            imgUrl: '',
            productName: '',
            price: 0,
        }
    }

    handleImgChange(e){
        this.setState({
            imgUrl: e.target.value
        })
        
    }
    
    handleNameChange(e){
        this.setState({
            productName: e.target.value
        })
        console.log(e);
    }
    
    handlePriceChange(e){
        this.setState({
            price: e.target.value
        })
        console.log(e);
    }

    handleClearPrice(){
        this.setState({
            price: ''
        })
    }

    handleCancel(){
        this.setState({
            imgUrl: '',
            productName: '',
            price: 0,
        })
    }
    
    handleAdd(){
        axios
            .post(`/api/inventory`,{
                "imgurl": this.state.imgUrl,
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




    render() {
        return (
            <div className='form'>

                <h3>Iamge URL:</h3>
                <input type="text" onChange={(e)=>this.handleImgChange(e)} placeholder='img URL goes here' />
                <h3>ProductName</h3>
                <input type="text" onChange={(e) => this.handleNameChange(e)} placeholder='Product name goes here' />
                <h3>Price:</h3>
                <input type="text" onChange={(e) => this.handlePriceChange(e)} placeholder='0' />
                <button onClick={()=>this.handleCancel()}  >Cancel</button>
                <button onClick={()=>this.handleAdd()} >Add to Inventory</button>
            </div>
        )
    }
}