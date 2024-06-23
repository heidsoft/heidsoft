export const getCloudProducts = () => {
    return [
      {
        category: '计算服务',
        products: [
          {
            name: 'ECS',
            description: 'Elastic Compute Service',
            price: '¥0.5/小时',
            provider: 'aliyun',
            logo: 'aliyun-logo.png'
          },
          {
            name: 'CVM',
            description: 'Cloud Virtual Machine',
            price: '¥0.4/小时',
            provider: 'tencentcloud',
            logo: 'tencentcloud-logo.png'
          },
          {
            name: 'ECS',
            description: 'Elastic Cloud Server',
            price: '¥0.45/小时',
            provider: 'huaweicloud',
            logo: 'huaweicloud-logo.png'
          },
          {
            name: 'EC2',
            description: 'Elastic Compute Cloud',
            price: '$0.023/小时',
            provider: 'aws',
            logo: 'aws-logo.png'
          },
        ],
      },
      {
        category: '存储服务',
        products: [
          {
            name: 'OSS',
            description: 'Object Storage Service',
            price: '¥0.12/GB',
            provider: 'aliyun',
            logo: 'aliyun-logo.png'
          },
          {
            name: 'COS',
            description: 'Cloud Object Storage',
            price: '¥0.10/GB',
            provider: 'tencentcloud',
            logo: 'tencentcloud-logo.png'
          },
          {
            name: 'OBS',
            description: 'Object Storage Service',
            price: '¥0.11/GB',
            provider: 'huaweicloud',
            logo: 'huaweicloud-logo.png'
          },
          {
            name: 'S3',
            description: 'Simple Storage Service',
            price: '$0.023/GB',
            provider: 'aws',
            logo: 'aws-logo.png'
          },
        ],
      },
      {
        category: '数据库服务',
        products: [
          {
            name: 'RDS',
            description: 'Relational Database Service',
            price: '¥0.15/小时',
            provider: 'aliyun',
            logo: 'aliyun-logo.png'
          },
          {
            name: 'CDB',
            description: 'Cloud Database',
            price: '¥0.12/小时',
            provider: 'tencentcloud',
            logo: 'tencentcloud-logo.png'
          },
          {
            name: 'GaussDB',
            description: 'GaussDB',
            price: '¥0.13/小时',
            provider: 'huaweicloud',
            logo: 'huaweicloud-logo.png'
          },
          {
            name: 'RDS',
            description: 'Relational Database Service',
            price: '$0.020/小时',
            provider: 'aws',
            logo: 'aws-logo.png'
          },
        ],
      },
      {
        category: '网络服务',
        products: [
          {
            name: 'CDN',
            description: 'Content Delivery Network',
            price: '¥0.05/GB',
            provider: 'aliyun',
            logo: 'aliyun-logo.png'
          },
          {
            name: 'CDN',
            description: 'Content Delivery Network',
            price: '¥0.04/GB',
            provider: 'tencentcloud',
            logo: 'tencentcloud-logo.png'
          },
          {
            name: 'CDN',
            description: 'Content Delivery Network',
            price: '¥0.045/GB',
            provider: 'huaweicloud',
            logo: 'huaweicloud-logo.png'
          },
          {
            name: 'CloudFront',
            description: 'Content Delivery Network',
            price: '$0.020/GB',
            provider: 'aws',
            logo: 'aws-logo.png'
          },
        ],
      },
    ];
  }