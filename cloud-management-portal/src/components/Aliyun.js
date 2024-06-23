// src/components/Aliyun.js
import React from 'react';

const Aliyun = () => {
    return (
        <div className="cloud-service">
            <h2>阿里云服务</h2>
            <iframe
                src="https://www.aliyun.com/product"
                title="阿里云产品"
                width="100%"
                height="600px"
                style={{ border: 'none' }}
            ></iframe>
        </div>
    );
}

export default Aliyun;
