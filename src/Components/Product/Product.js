import React from 'react';

const Product = ({ item, handleDelete }) => {
    return (
        <div className='product' >
            <img src={item.imgurl} alt="" />
            <p>{item.productname}</p>
            <p>{item.price}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default Product