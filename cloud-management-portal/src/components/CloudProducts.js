// src/components/CloudProducts.js
import React from 'react';

const CloudProducts = ({ provider, products }) => {
    return (
        <div className="cloud-products">
            <h2>{provider}产品列表</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <strong>{product.name}</strong>: {product.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CloudProducts;
