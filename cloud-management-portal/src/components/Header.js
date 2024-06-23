// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <a href="/aliyun">阿里云</a>
                <a href="/tencentcloud">腾讯云</a>
                <a href="/huaweicloud">华为云</a>
                <a href="/aws">AWS</a>
                <a href="/news">新闻</a>
                <a href="/new-services">新服务</a>
                <a href="/blog">博客</a>
                <a href="/status">服务状态</a>
            </nav>
        </header>
    );
}

export default Header;
