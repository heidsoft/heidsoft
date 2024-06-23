// src/App.js

import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import AllProducts from './components/AllProducts';
import CloudProducts from './components/CloudProducts';
import Login from './components/Login';
import Register from './components/Register';
import Checkout from './components/Checkout';
import './App.css';

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        console.log('Product added to cart:', product);
    };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<AllProducts addToCart={addToCart}/>} />
          <Route path="/aliyun" element={<CloudProducts cloud="阿里云" />} />
          <Route path="/tencentcloud" element={<CloudProducts cloud="腾讯云" />} />
          <Route path="/huaweicloud" element={<CloudProducts cloud="华为云" />} />
          <Route path="/aws" element={<CloudProducts cloud="AWS" />} />
          <Route path="/news" element={<News />} />
          <Route path="/new-services" element={<NewServices />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/status" element={<Status />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => <div>欢迎来到首页</div>;
const News = () => <div>新闻页面</div>;
const NewServices = () => <div>新服务页面</div>;
const Blog = () => <div>博客页面</div>;
const Status = () => <div>服务状态页面</div>;

export default App;
