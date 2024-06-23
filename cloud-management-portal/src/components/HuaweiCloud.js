// src/components/HuaweiCloud.js
import React from 'react';

const HuaweiCloud = () => {
    return (
        <div className="cloud-service">
            <h2>华为云服务</h2>
            <iframe
                src="https://www.huaweicloud.com/product/"
                title="华为云产品"
                width="100%"
                height="600px"
                style={{ border: 'none' }}
            ></iframe>
        </div>
    );
}

export default HuaweiCloud;
