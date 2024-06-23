// src/services/cloudProductsService.js

const cloudProducts = [
    {
      category: '计算服务',
      products: [
        { name: 'ECS', description: 'Elastic Compute Service', price: '¥0.5/小时', provider: 'aliyun', logo: 'aliyun-logo.png' },
        { name: 'EC2', description: 'Elastic Compute Cloud', price: '$0.023/小时', provider: 'aws', logo: 'aws-logo.png' },
        // more products...
      ],
    },
    {
      category: '存储服务',
      products: [
        { name: 'OSS', description: 'Object Storage Service', price: '¥0.12/GB', provider: 'aliyun', logo: 'aliyun-logo.png' },
        { name: 'S3', description: 'Simple Storage Service', price: '$0.023/GB', provider: 'aws', logo: 'aws-logo.png' },
        // more products...
      ],
    },
    // more categories...
  ];
  
export const getCloudProducts = () => {
    return cloudProducts;
}
