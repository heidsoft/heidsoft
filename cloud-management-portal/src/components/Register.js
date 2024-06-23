// src/components/Register.js
import React, { useState } from 'react';
import './Auth.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // 处理注册逻辑
    };

    return (
        <div className="auth-container">
            <h2>注册</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    邮箱:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    密码:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">注册</button>
            </form>
        </div>
    );
};

export default Register;