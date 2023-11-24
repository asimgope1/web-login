import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PhoneNumberInput from './components/PhoneNumberInput';
import OTPVerification from './components/OTPVerification';
import LoggedInScreen from './components/LoggedInScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PhoneNumberInput />} />  // Use 'element' prop instead of 'component'
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/loggedin" element={<LoggedInScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
