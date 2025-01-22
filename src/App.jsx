import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Page from './pages/Page';
import Home from './pages/Home';
import LoginPage from './pages/Login/LoginPage';
import OTPVerification from './pages/OTP/OTPVerification';
import CreateAccount from './pages/CreateAccount/CreateAccount';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/" element={<Page />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/otp" element={<OTPVerification/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/create" element={<CreateAccount/>} />
        <Route path="/controls" element={<Page/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
