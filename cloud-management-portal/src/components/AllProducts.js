// src/components/AllProducts.js

import React from 'react';
import { getCloudProducts } from '../services/cloudProductsService';
import './AllProducts.css';

const AllProducts = ({ addToCart }) => {
    const cloudProducts = getCloudProducts();

    return (
        <div className="all-products">
            {cloudProducts.map((categoryData, categoryIndex) => (
                <div key={categoryIndex} className="category-section">
                    <h2 className="category-title">{categoryData.category}</h2>
                    <div className="products-list">
                        {categoryData.products.map((product, productIndex) => (
                            <div key={productIndex} className="product-card">
                                <div className="product-logo-container">
                                    <img 
                                        src={`/logos/${product.logo}`} 
                                        alt={`${product.provider} logo`} 
                                        className="product-logo" 
                                    />
                                </div>
                                <div className="product-info">
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className="product-description">{product.description}</p>
                                    <p className="product-price">{product.price}</p>
                                    <button 
                                        onClick={() => addToCart(product)} 
                                        className="add-to-cart-button"
                                    >
                                        加入购物车
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllProducts;
