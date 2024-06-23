// src/components/CloudProducts.js

import React from 'react';

const CloudProducts = ({ cloud }) => {
  return (
    <div>
      <h1>{cloud} 产品</h1>
      <p>这里展示 {cloud} 的所有产品信息。</p>
      {/* 具体产品信息 */}
    </div>
  );
}

export default CloudProducts;
