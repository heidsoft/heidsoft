// src/components/AllProducts.js

import React from 'react';
import { getCloudProducts } from '../services/cloudProductsService';
import './AllProducts.css';

const AllProducts = () => {
  const cloudProducts = getCloudProducts();

  return (
    <div className="all-products-container">
      <h1>全部产品</h1>
      <div className="cloud-products-grid">
        {cloudProducts.map(category => (
          <div key={category.category} className="product-category">
            <h2 className="category-title">{category.category}</h2>
            <div className="product-list">
              {category.products.map(product => (
                <div key={product.name} className="product-card">
                  <img src={`/logos/${product.logo}`} alt={product.provider} className="provider-logo" />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>价格: {product.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
