import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id of the added product
        for(const id in storedCart){
            // step 2: get the product by using id
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                // step 3: get the quantity of the product
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct)
            }
            console.log('added product: ',addedProduct)
            // step 5: save the cart
    } setCart(savedCart)
},[products])
    const handleAddToCart = (product)  => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                    {
                        products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart = {handleAddToCart}
                        ></Product>)
                    }
            </div>
            <div className='cart-container'>
                <Cart 
                handleClearCart={handleClearCart}
                cart={cart}>
                    <Link to='/orders'>
                    <button className='review-order'>
                        Review Order
                        <FontAwesomeIcon icon={faArrowRight} />
                        </button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;