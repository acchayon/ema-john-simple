import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p className='product-price'>Price: ${price}</p>
                <p className='p-seller'>Manufacturer: {seller}</p>
                <p className='rate'>ratings: {ratings}</p>
            </div>
            <button className='btn-cart'>Add To cart</button>
        </div>
    );
};

export default Product;