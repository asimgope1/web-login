import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handlePhoneNumberSubmit = (e) => {
    e.preventDefault();
    // Your logic to send OTP to the entered phone number goes here
    if (phoneNumber.trim().length === 10) {
      navigate('/otp');
    } else {
      alert('Please enter a valid phone number');
    }
  };

  return (
    <>


    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh', // Change the height to a smaller value
        backgroundColor: 'rgba(255, 0, 0, 0.5)', // Make the background color transparent
      }}
    >
      <form onSubmit={handlePhoneNumberSubmit}>
        <input
          type="tel"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default PhoneNumberInput;


