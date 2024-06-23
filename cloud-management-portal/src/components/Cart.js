// src/components/Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div className="cart-container">
            <h2>购物车</h2>
            {cart.length === 0 ? (
                <p>购物车是空的。</p>
            ) : (
                cart.map((product, index) => (
                    <div key={index} className="cart-item">
                        <img src={product.logo} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>价格: {product.price}</p>
                    </div>
                ))
            )}
            <button>结算</button>
        </div>
    );
};

export default Cart;
