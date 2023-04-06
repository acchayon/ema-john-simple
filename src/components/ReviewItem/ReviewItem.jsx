import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleremoveFromCart }) => {
    const { id, img, name, price, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-detail'>
                <p className='p-title'>{name}</p>
                <p>Price: <span className='text-color'>${price}</span></p>
                <p>Total Quantity: <span className='text-color'>{quantity}</span></p>
            </div>
            <button onClick={() => handleremoveFromCart(id)} className='btn-delete' ><FontAwesomeIcon className='d-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;