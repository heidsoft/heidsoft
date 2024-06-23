// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CloudProducts from './components/CloudProducts';

const App = () => {
    const aliyunProducts = [
        { id: 1, name: '云服务器 ECS', description: '提供弹性计算能力的云服务器' },
        { id: 2, name: '对象存储 OSS', description: '安全、低成本、高可靠、可扩展的云存储服务' },
        // 其他阿里云产品...
    ];

    const tencentCloudProducts = [
        { id: 1, name: '云主机 CVM', description: '提供多种规格和操作系统的云服务器' },
        { id: 2, name: '云存储 COS', description: '可扩展、安全、高可用的对象存储服务' },
        // 其他腾讯云产品...
    ];

    const huaweiCloudProducts = [
        { id: 1, name: '弹性云服务器 ECS', description: '支持按需分配、弹性伸缩的云计算服务' },
        { id: 2, name: '分布式对象存储 OBS', description: '安全可靠的对象存储服务' },
        // 其他华为云产品...
    ];

    const awsProducts = [
        { id: 1, name: 'Amazon EC2', description: '可伸缩的计算能力' },
        { id: 2, name: 'Amazon S3', description: '可扩展的对象存储' },
        // 其他AWS产品...
    ];

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/aliyun" element={<CloudProducts provider="阿里云" products={aliyunProducts} />} />
                <Route path="/tencentcloud" element={<CloudProducts provider="腾讯云" products={tencentCloudProducts} />} />
                <Route path="/huaweicloud" element={<CloudProducts provider="华为云" products={huaweiCloudProducts} />} />
                <Route path="/aws" element={<CloudProducts provider="AWS" products={awsProducts} />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
