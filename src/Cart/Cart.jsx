import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart; option 1
    // const {cart} = props;   option 2

    console.log(cart);
    let total = 0;
    let totalShipping = 0;
    for(const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = total * 7 / 100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <h5>Selected Items: {cart.length}</h5>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: {totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;