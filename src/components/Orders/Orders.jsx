import React, { useState } from 'react';
import Cart from '../../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faProcedures } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleremoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product ={product}
                    handleremoveFromCart={handleremoveFromCart}
                    ></ReviewItem>)
                }
            </div>

            <div className='cart-container'>
                <Cart 
                handleClearCart={handleClearCart}
                cart={cart}
                >
                    <Link to='/checkout'>
                    <button className='proceed-checkout'>
                        Proceed Checkout
                        <FontAwesomeIcon icon={faProcedures} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;