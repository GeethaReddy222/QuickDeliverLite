import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CustomerDashboard from './components/Customer/CustomerDashboard';
import GoogleSuccess from './components/GoogleSuccess';
import GoogleFailure from './components/GoogleFailure';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Home from './components/Home';
import DriverDashboard from './components/Driver/DriverDashboard';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/dashboard" element={<CustomerDashboard />} />
        <Route path="/driver-dashboard" element={<DriverDashboard />} />
        <Route path="/google-success" element={<GoogleSuccess />} />
        <Route path="/google-failure" element={<GoogleFailure />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
