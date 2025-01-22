'use client';

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './log.css';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberDevice: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', formData);
  };

  return (
    <div className="container">
      <div className="leftSide">
        <div className="brandText">CRICAUCTION</div>
      </div>
      <div className="rightSide">
        <form className="formContainer" onSubmit={handleSubmit}>
          <h1 className="welcome">Welcome To CricAuction</h1>
          <h1 className="title">Login to your account</h1>

          <div className="inputGroup">
            <label className="label" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              className="input"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
            />
          </div>

          <div className="inputGroup">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="input"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </div>

          <div className="footer">
            <div className="checkboxContainer">
              <input
                id="rememberDevice"
                name="rememberDevice"
                type="checkbox"
                className="checkbox"
                checked={formData.rememberDevice}
                onChange={handleChange}
              />
              <label className="checkboxLabel" htmlFor="rememberDevice">
                Remember this device
              </label>
            </div>
            <Link href="/forgot-password" className="link">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="loginButton">
            Login
          </button>

          <div className="createAccount">
            New to CricAuction?{' '}
            <Link href="/signup" className="link">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}