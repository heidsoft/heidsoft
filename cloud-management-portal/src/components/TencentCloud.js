// src/components/TencentCloud.js
import React from 'react';

const TencentCloud = () => {
    return (
        <div className="cloud-service">
            <h2>腾讯云服务</h2>
            <iframe
                src="https://cloud.tencent.com/product"
                title="腾讯云产品"
                width="100%"
                height="600px"
                style={{ border: 'none' }}
            ></iframe>
        </div>
    );
}

export default TencentCloud;
