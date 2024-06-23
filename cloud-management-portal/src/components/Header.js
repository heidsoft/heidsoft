// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/all-products">全部产品</Link>
                <Link to="/aliyun">阿里云</Link>
                <Link to="/tencentcloud">腾讯云</Link>
                <Link to="/huaweicloud">华为云</Link>
                <Link to="/aws">AWS</Link>
                <Link to="/news">新闻</Link>
                <Link to="/new-services">新服务</Link>
                <Link to="/blog">博客</Link>
                <Link to="/status">服务状态</Link>
            </nav>
        </header>
    );
}

export default Header;
