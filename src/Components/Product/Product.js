import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ item, handleDelete, updateItem }) => {
    return (
        <div className='product' >
            <img src={item.imgurl} alt="" />
            <p>{item.productname}</p>
            <p>${item.price}</p>
            <button
                onClick={() => handleDelete(item.id)}
            >Delete</button>
            <Link to={`/edit/${item.id}`} >
                <button
                    onClick={() => updateItem(item)}
                >Edit</button>
            </Link>
        </div>
    )
}

export default Product