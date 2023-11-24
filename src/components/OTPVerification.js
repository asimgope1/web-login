import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();


  const handleOTPSubmit = (e) => {
    e.preventDefault();
    // Your logic to verify the entered OTP goes here
    const expectedOTP = '123456'; // Replace with your actual OTP
    if (otp === expectedOTP) {
        navigate('/loggedin');
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div>
      <form onSubmit={handleOTPSubmit}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button type="submit">Submit OTP</button>
      </form>
    </div>
  );
};

export default OTPVerification;



